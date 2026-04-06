const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { DOMParser, XMLSerializer } = require('xmldom');

// ─── Size constants (English Metric Units, 1cm = 360000 EMU) ─────────────────
const SIZES = {
    table: { cx: 3_000_000, cy: 2_250_000 }, // ~8.3cm × 6.25cm
    page:  { cx: 5_400_000, cy: 3_600_000 }  // ~15cm   × 10cm
};

const MK_PREFIX = 'XXIMGSTART';
const MK_SUFFIX = 'IMGENDXX';
function makeMarker(id) { return `${MK_PREFIX}${id}${MK_SUFFIX}`; }
const MARKER_REGEX = new RegExp(`${MK_PREFIX}(\\d+)${MK_SUFFIX}`, 'g');

// ─── Logic Helpers (Ported from DocxRenderer) ───────────────────────────────

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
    for (let [col, val] of Object.entries(row)) {
        // Strip table prefix if present (e.g. "schedule__sr_no" -> "sr_no")
        // This ensures the placeholder {{s.sr_no}} works even with unique DB field names.
        if (col.includes('__')) {
            col = col.split('__').pop();
        }

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

// ─── ReportRenderer ──────────────────────────────────────────────────────────────

class ReportRenderer {
    constructor(outputDir = null) {
        this.outputDir = outputDir || path.join('media', 'generated_reports');
    }

    generateFilename() {
        const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
        return `report_${ts}_${uuidv4().slice(0, 6)}.docx`;
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
                                    if (t.textContent) t.textContent = t.textContent.replace(itemPattern, '{{');
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

    // Pass 2 helpers
    detectImageType(buf) {
        if (buf[0] === 0x89 && buf[1] === 0x50) return { ext: 'png', mime: 'image/png' };
        if (buf[0] === 0xFF && buf[1] === 0xD8) return { ext: 'jpeg', mime: 'image/jpeg' };
        return { ext: 'png', mime: 'image/png' };
    }

    getPngDimensions(buf) {
        try {
            if (buf[0] === 0x89 && buf[1] === 0x50) {
                const w = buf.readUInt32BE(16);
                const h = buf.readUInt32BE(20);
                if (w > 0 && h > 0) return { w, h };
            }
        } catch (_) {}
        return null;
    }

    scaleToFit(naturalW, naturalH, maxCx, maxCy) {
        const DPI = 96;
        const EMU_PER_PX = 914400 / DPI;
        const srcCx = naturalW * EMU_PER_PX;
        const srcCy = naturalH * EMU_PER_PX;
        const scale = Math.min(maxCx / srcCx, maxCy / srcCy, 1.0);
        return { cx: Math.round(srcCx * scale), cy: Math.round(srcCy * scale) };
    }

    buildDrawingXml(rId, imgId, cx, cy) {
        return [
            `<w:drawing>`,
            `<wp:inline xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" distT="0" distB="0" distL="0" distR="0">`,
            `<wp:extent cx="${cx}" cy="${cy}"/>`,
            `<wp:effectExtent l="0" t="0" r="0" b="0"/>`,
            `<wp:docPr id="${imgId}" name="ReportImg${imgId}" descr=""/>`,
            `<wp:cNvGraphicFramePr>`,
            `<a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/>`,
            `</wp:cNvGraphicFramePr>`,
            `<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">`,
            `<a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">`,
            `<pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">`,
            `<pic:nvPicPr>`,
            `<pic:cNvPr id="${imgId}" name="ReportImg${imgId}"/>`,
            `<pic:cNvPicPr><a:picLocks noChangeAspect="1" noChangeArrowheads="1"/></pic:cNvPicPr>`,
            `</pic:nvPicPr>`,
            `<pic:blipFill>`,
            `<a:blip xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:embed="${rId}"/>`,
            `<a:stretch><a:fillRect/></a:stretch>`,
            `</pic:blipFill>`,
            `<pic:spPr bwMode="auto">`,
            `<a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm>`,
            `<a:prstGeom prst="rect"><a:avLst/></a:prstGeom>`,
            `<a:noFill/>`,
            `</pic:spPr>`,
            `</pic:pic>`,
            `</a:graphicData>`,
            `</a:graphic>`,
            `</wp:inline>`,
            `</w:drawing>`
        ].join('');
    }

    isInsideTableCell(xmlBefore) {
        const lastOpen  = xmlBefore.lastIndexOf('<w:tc');
        const lastClose = xmlBefore.lastIndexOf('</w:tc>');
        return lastOpen > lastClose;
    }

    expandGroups(context, fields = [], imageRegistry = {}) {
        const expanded = {};
        let markerId = 1;

        // Pre-process arrays for tables (normalize and auto-fill)
        for (const [key, value] of Object.entries(context)) {
            if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object' && !Buffer.isBuffer(value[0])) {
                context[key] = autoFillSerialNumbers(value.map(v => normalizeRow(v)).filter(v => v !== null));
            }
        }

        for (const [key, value] of Object.entries(context)) {
            const fieldDef = fields.find(f => f.fieldName === key);
            
            // If it's a loop table, pass the array directly for docxtemplater
            if (fieldDef && fieldDef.fieldType === 'table') {
                expanded[key] = value;
                continue;
            }

            const isGroup   = fieldDef ? fieldDef.isGroup : Array.isArray(value);
            const isImgType = fieldDef && (fieldDef.fieldType === 'dynamic-image-group' || fieldDef.fieldType === 'image');

            if (isGroup && Array.isArray(value)) {
                value.forEach((item, i) => {
                    const num = i + 1;
                    if (Buffer.isBuffer(item) && item.length > 0) {
                        const mid = markerId++;
                        imageRegistry[mid] = { buf: item, key };
                        const marker = makeMarker(mid);
                        expanded[`${key}_${num}`] = marker;
                        expanded[`${key}${num}`]  = marker;
                    } else {
                        const val = (item || '').toString();
                        expanded[`${key}_${num}`] = val;
                        expanded[`${key}${num}`]  = val;
                    }
                });
            } else if (isImgType) {
                const buf = Array.isArray(value) ? value[0] : value;
                if (Buffer.isBuffer(buf) && buf.length > 0) {
                    const mid = markerId++;
                    imageRegistry[mid] = { buf, key };
                    expanded[key] = makeMarker(mid);
                } else {
                    expanded[key] = '';
                }
            } else {
                const k = key.toLowerCase();
                if (k.includes('date') && value) {
                    expanded[key] = formatDate(value, false);
                } else if (k.includes('time') && value) {
                    expanded[key] = formatTime(value);
                } else {
                    expanded[key] = Array.isArray(value) ? value.join('\n') : (value || '');
                }
            }
        }
        return expanded;
    }

    async embedImages(zip, imageRegistry) {
        if (Object.keys(imageRegistry).length === 0) return;
        let docXml = zip.file('word/document.xml').asText();
        const relsPath = 'word/_rels/document.xml.rels';
        let relsXml = zip.file(relsPath) ? zip.file(relsPath).asText() : `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"></Relationships>`;

        let mediaIndex = 900;
        let drawingId  = 900;
        MARKER_REGEX.lastIndex = 0;
        const occurrences = [];
        let match;
        while ((match = MARKER_REGEX.exec(docXml)) !== null) {
            occurrences.push({ id: parseInt(match[1]), index: match.index, full: match[0] });
        }

        for (let o = occurrences.length - 1; o >= 0; o--) {
            const occ = occurrences[o];
            const entry = imageRegistry[occ.id];
            if (!entry) continue;
            const { buf } = entry;
            const { ext } = this.detectImageType(buf);
            const mediaName = `report_img_${mediaIndex}.${ext}`;
            const rId = `rIdRpt${mediaIndex}`;
            zip.file(`word/media/${mediaName}`, buf);
            const relXml = `<Relationship Id="${rId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${mediaName}"/>`;
            relsXml = relsXml.replace('</Relationships>', relXml + '</Relationships>');
            const xmlBefore = docXml.substring(0, occ.index);
            const inTableCell = this.isInsideTableCell(xmlBefore);
            const maxSize = inTableCell ? SIZES.table : SIZES.page;
            const dims = this.getPngDimensions(buf);
            const size = dims ? this.scaleToFit(dims.w, dims.h, maxSize.cx, maxSize.cy) : maxSize;
            const drawingXml = this.buildDrawingXml(rId, drawingId, size.cx, size.cy);
            const pStart = Math.max(xmlBefore.lastIndexOf('<w:p '), xmlBefore.lastIndexOf('<w:p>'));
            const pEnd = docXml.indexOf('</w:p>', occ.index) + 6;
            if (pStart !== -1 && pEnd > 6) {
                const align = inTableCell ? 'left' : 'center';
                const newPara = `<w:p><w:pPr><w:jc w:val="${align}"/><w:spacing w:after="0"/></w:pPr><w:r>${drawingXml}</w:r></w:p>`;
                docXml = docXml.substring(0, pStart) + newPara + docXml.substring(pEnd);
            } else {
                docXml = docXml.substring(0, occ.index) + '' + docXml.substring(occ.index + occ.full.length);
            }
            mediaIndex++; drawingId++;
        }
        zip.file(relsPath, relsXml);
        zip.file('word/document.xml', docXml);
    }

    async renderReport(templatePath, context, fields = []) {
        try {
            if (!fs.existsSync(templatePath)) return null;
            if (!fs.existsSync(this.outputDir)) fs.mkdirSync(this.outputDir, { recursive: true });
            const outputPath = path.join(this.outputDir, this.generateFilename());

            const imageRegistry = {};
            const textContext   = this.expandGroups(context, fields, imageRegistry);

            const content = fs.readFileSync(templatePath, 'binary');
            const zip     = new PizZip(content);
            let xmlContent = zip.file('word/document.xml').asText();
            
            // Decisive Fix: XML Cleaning to bridge fragmented tags
            xmlContent = this.cleanXml(xmlContent);

            const docXml = new DOMParser().parseFromString(xmlContent, 'text/xml');
            this.mergeTextNodes(docXml);
            this.transformTableLoops(docXml);
            xmlContent = new XMLSerializer().serializeToString(docXml);
            zip.file('word/document.xml', xmlContent);

            // Pass 1.2: Render text and loop markers
            const doc = new Docxtemplater(zip, {
                paragraphLoop: true,
                linebreaks:    true,
                delimiters:    { start: '{{', end: '}}' },
                nullGetter() { return ''; }
            });
            doc.render(textContext);

            // Pass 2: Embed images
            await this.embedImages(doc.getZip(), imageRegistry);

            fs.writeFileSync(outputPath, doc.getZip().generate({ type: 'nodebuffer' }));
            return outputPath;
        } catch (err) {
            console.error('Error rendering report:', err.stack || err);
            return null;
        }
    }
}

module.exports = ReportRenderer;
