const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { DOMParser, XMLSerializer } = require('xmldom');

// ─── Helpers ──────────────────────────────────────────────────────────────────

const SR_NO_RE = /^(sr[_.]?no\.?|s[_.]?no\.?|serial[_.]?no\.?|sr_?num|sno|sl[_.]?no\.?)$/i;

function formatDate(val, includeDay = false) {
    try {
        const d = new Date(val);
        if (!isNaN(d.getTime())) {
            const dateStr = d.toLocaleDateString('en-GB').replace(/\//g, '-');
            if (includeDay) {
                const dayName = d.toLocaleDateString('en-GB', { weekday: 'long' });
                return `${dateStr}, ${dayName}`;
            }
            return dateStr;
        }
    } catch (_) {}
    return val;
}

function formatTime(val) {
    try {
        if (typeof val === 'string' && val.includes(':')) {
            let [hours, mins] = val.split(':').map(Number);
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;
            return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')} ${ampm}`;
        }
    } catch (_) {}
    return val;
}

function normalizeRow(row) {
    if (typeof row !== 'object' || row === null) return row;
    const hasData = Object.values(row).some(
        v => v !== undefined && v !== null && String(v).trim() !== '' && String(v) !== 'undefined'
    );
    if (!hasData) return null;
    const norm = {};
    for (const [col, val] of Object.entries(row)) {
        const k = col.toLowerCase();
        // In tables, always include the day name
        if (k.includes('date') && val) norm[col] = formatDate(val, true);
        else if (k.includes('time') && val) norm[col] = formatTime(val);
        else norm[col] = val;
    }
    return norm;
}

function autoFillSerialNumbers(rows) {
    if (!Array.isArray(rows) || rows.length === 0) return rows;
    const firstRow = rows[0];
    if (typeof firstRow !== 'object' || firstRow === null) return rows;
    const srCols = Object.keys(firstRow).filter(col => SR_NO_RE.test(col.trim()));
    if (srCols.length === 0) return rows;
    return rows.map((row, idx) => {
        const updated = { ...row };
        srCols.forEach(col => { updated[col] = String(idx + 1); });
        return updated;
    });
}

// ─── DocxRenderer ──────────────────────────────────────────────────────────────

class DocxRenderer {
    constructor(outputDir = null) {
        this.outputDir = outputDir || path.join('media', 'generated_documents');
    }

    generateFilename() {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
        const uniqueId = uuidv4().slice(0, 6);
        return `generated_${timestamp}_${uniqueId}.docx`;
    }

    preprocessContext(context) {
        for (const key of Object.keys(context)) {
            const val = context[key];
            if (Array.isArray(val)) {
                // Table data: normalizeRow already handles includeDay = true
                const cleaned = val.map(row => normalizeRow(row)).filter(row => row !== null);
                context[key] = autoFillSerialNumbers(cleaned);
            } else if (typeof val === 'string') {
                const k = key.toLowerCase();
                // Top-level body date: default to includeDay = false
                if (k.includes('date') && val) context[key] = formatDate(val, false);
                else if (k.includes('time') && val) context[key] = formatTime(val);
            }
        }
        return context;
    }

    getAllTNodes(root) {
        const nodes = [];
        const walk = (node) => {
            if (node && (node.nodeName === 'w:t' || node.localName === 't')) nodes.push(node);
            if (node && node.childNodes) {
                for (let i = 0; i < node.childNodes.length; i++) walk(node.childNodes[i]);
            }
        };
        walk(root);
        return nodes;
    }

    findContainingRow(node) {
        let cur = node;
        while (cur && cur.nodeName !== 'w:tr' && cur.localName !== 'tr') cur = cur.parentNode;
        return cur;
    }

    /**
     * Decisive XML cleaning pass to join fragmented tags.
     * Removes invisible noise like spellcheck markers and joins split runs.
     */
    cleanXml(xml) {
        // 1. Remove spelling/proofing tags that Word inserts inside placeholders
        xml = xml.replace(/<(w:proofErr|w:noBreakHyphen)[^>]*\/>/g, '');
        
        // 2. Aggressively join adjacent text segments that were split into multiple runs
        // but have NO formatting/layout elements in between.
        // This is the #1 fix for docxtemplater "tag seen" issues.
        xml = xml.replace(/<\/w:t><\/w:r><w:r(?: [^>]*)*>(?:<w:rPr(?:>.*?<\/w:rPr>|[^>]*\/>))?<w:t(?: [^>]*)*>/g, '');
        
        return xml;
    }

    /**
     * Consolidate text nodes within each run.
     */
    mergeTextNodes(docXml) {
        const rs = docXml.getElementsByTagName('w:r');
        for (let i = 0; i < rs.length; i++) {
            const r = rs[i];
            const tNodes = Array.from(r.childNodes).filter(n => n.nodeName === 'w:t');
            if (tNodes.length > 1) {
                tNodes[0].textContent = tNodes.map(t => t.textContent).join('');
                for (let k = 1; k < tNodes.length; k++) r.removeChild(tNodes[k]);
            }
        }
    }

    transformTableLoops(docXml) {
        const documentElement = docXml.documentElement;
        const loopRegex    = /\{\s*%\s*tr\s+for\s+(\w+)\s+in\s+([\w.]+)\s*%\s*\}/;
        const endLoopRegex = /\{\s*%\s*tr\s+endfor\s*%\s*\}/;

        const allT = this.getAllTNodes(documentElement);
        const loopStarts = [];
        const loopEnds   = [];

        allT.forEach(t => {
            const text = (t.textContent || '').trim();
            const m = loopRegex.exec(text);
            if (m) {
                loopStarts.push({ node: t, itemVar: m[1], listName: m[2] });
            } else if (endLoopRegex.test(text)) {
                loopEnds.push({ node: t });
            }
        });

        for (let i = 0; i < loopStarts.length; i++) {
            const start = loopStarts[i];
            const end   = (i < loopEnds.length) ? loopEnds[i] : null;
            if (!start || !end) continue;

            const startRow = this.findContainingRow(start.node);
            const endRow   = this.findContainingRow(end.node);

            if (startRow && endRow && startRow !== endRow && startRow.parentNode === endRow.parentNode) {
                const parent  = startRow.parentNode;
                const allRows = Array.from(parent.childNodes).filter(n => n.nodeName === 'w:tr' || n.localName === 'tr');
                const si      = allRows.indexOf(startRow);
                const ei      = allRows.indexOf(endRow);

                if (si !== -1 && ei !== -1 && ei > si) {
                    const dataRows = allRows.slice(si + 1, ei);
                    if (dataRows.length > 0) {
                        const firstT = this.getAllTNodes(dataRows[0]);
                        const lastT  = this.getAllTNodes(dataRows[dataRows.length - 1]);

                        if (firstT.length > 0 && lastT.length > 0) {
                            firstT[0].textContent = `{{#${start.listName}}}` + (firstT[0].textContent || '');
                            lastT[lastT.length - 1].textContent =
                                (lastT[lastT.length - 1].textContent || '') + `{{/${start.listName}}}`;

                            const itemPattern = new RegExp(`\\{\\{\\s*${start.itemVar}\\.`, 'g');
                            dataRows.forEach(row => {
                                this.getAllTNodes(row).forEach(t => {
                                    if (t.textContent) {
                                        t.textContent = t.textContent.replace(itemPattern, '{{');
                                    }
                                });
                            });

                            parent.removeChild(startRow);
                            parent.removeChild(endRow);
                        }
                    } else {
                        start.node.textContent = `{{#${start.listName}}}`;
                        end.node.textContent   = `{{/${start.listName}}}`;
                    }
                }
            } else {
                start.node.textContent = `{{#${start.listName}}}`;
                end.node.textContent   = `{{/${start.listName}}}`;
            }
        }
        return docXml;
    }

    async renderDocument(templatePath, context) {
        try {
            if (!fs.existsSync(templatePath)) return null;
            if (!fs.existsSync(this.outputDir)) fs.mkdirSync(this.outputDir, { recursive: true });
            const outputPath = path.join(this.outputDir, this.generateFilename());

            this.preprocessContext(context);
            const content = fs.readFileSync(templatePath, 'binary');
            const zip     = new PizZip(content);
            let xmlContent = zip.file('word/document.xml').asText();

            // Decisive Fix: XML Cleaning to bridge fragmented tags
            xmlContent = this.cleanXml(xmlContent);
            
            const docXml = new DOMParser().parseFromString(xmlContent, 'text/xml');
            
            // Aggressive merging of text nodes within paragraphs
            this.mergeTextNodes(docXml);
            
            // Transform markers
            this.transformTableLoops(docXml);
            
            xmlContent = new XMLSerializer().serializeToString(docXml);
            zip.file('word/document.xml', xmlContent);

            const doc = new Docxtemplater(zip, {
                paragraphLoop: true,
                linebreaks:    true,
                delimiters:    { start: '{{', end: '}}' },
                nullGetter()  { return ''; }
            });

            doc.render(context);
            fs.writeFileSync(outputPath, doc.getZip().generate({ type: 'nodebuffer' }));
            return outputPath;
        } catch (error) {
            console.error('Error rendering DOCX:', error.stack || error);
            return null;
        }
    }
}

module.exports = DocxRenderer;
