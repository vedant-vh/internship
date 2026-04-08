const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { DOMParser, XMLSerializer } = require('xmldom');


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
    if (typeof val !== 'string') return val;
    
    // Handle time ranges (e.g. "10:00 to 12:00")
    if (val.includes(' to ')) {
        return val.split(' to ')
            .map(t => formatTime(t))
            .join(' to ');
    }

    try {
        if (val.includes(':')) {
            let [hours, mins] = val.split(':').map(Number);
            if (isNaN(hours) || isNaN(mins)) return val;
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
            
            // Scope inheritance for flat web UI submissions targeting nested templates.
            if (key.includes('.')) {
                const innerKey = key.split('.').pop();
                if (!context[innerKey]) {
                    context[innerKey] = context[key];
                }
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

    
    cleanXml(xml) {
        
        xml = xml.replace(/<(w:proofErr|w:noBreakHyphen)[^>]*\/>/g, '');
        
        
        xml = xml.replace(/<\/w:t><\/w:r><w:r(?: [^>]*)*>(?:<w:rPr(?:>.*?<\/w:rPr>|[^>]*\/>))?<w:t(?: [^>]*)*>/g, '');
        
        
        xml = xml.replace(/(\s)w:hRule="exact"/gi, '$1w:hRule="auto"');
        
        return xml;
    }

    
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
        const endLoopRegex = /\{\s*%\s*(?:tr\s+)?endfor\s*%\s*\}/;

        const allT = this.getAllTNodes(documentElement);
        
        const stack = [];
        const pairs = [];

        allT.forEach(t => {
            const text = (t.textContent || '').trim();
            const m = loopRegex.exec(text);
            if (m) {
                stack.push({ node: t, itemVar: m[1], listName: m[2] });
            } else if (endLoopRegex.test(text)) {
                if (stack.length > 0) {
                    const start = stack.pop();
                    pairs.push({ start, end: { node: t } });
                }
            }
        });

        // Process pairs innermost first to avoid breaking outer DOM row references during deletion.
        for (const pair of pairs) {
            const { start, end } = pair;
            
            // docxtemplater scopes nested iterators locally. If the template says "group.assignments",
            // we isolate the true property name ("assignments") to prevent scope-escaping.
            const finalListName = start.listName.includes('.') ? start.listName.split('.').pop() : start.listName;

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
                            firstT[0].textContent = `{{#${finalListName}}}` + (firstT[0].textContent || '');
                            lastT[lastT.length - 1].textContent =
                                (lastT[lastT.length - 1].textContent || '') + `{{/${finalListName}}}`;

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
                        start.node.textContent = `{{#${finalListName}}}`;
                        end.node.textContent   = `{{/${finalListName}}}`;
                    }
                }
            } else {
                start.node.textContent = `{{#${finalListName}}}`;
                end.node.textContent   = `{{/${finalListName}}}`;
            }
        }
        return docXml;
    }

    applyBreakMerging(zip) {
        let xmlContent = zip.file('word/document.xml').asText();
        const docXml = new DOMParser().parseFromString(xmlContent, 'text/xml');
        
        const rows = docXml.getElementsByTagName('w:tr');
        
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const cells = Array.from(row.childNodes).filter(n => n.nodeName === 'w:tc');
            if (cells.length === 0) continue;
            
            let hasBreak = false;
            let breakCellIndex = -1;
            
            // Check if any cell matches the exact 'BREAK' keyword (case-insensitive)
            for(let c = 0; c < cells.length; c++) {
                const cellText = Array.from(cells[c].getElementsByTagName('w:t'))
                    .map(t => t.textContent).join('').trim().toUpperCase();
                
                if (cellText === 'BREAK') {
                    hasBreak = true;
                    breakCellIndex = c;
                    break;
                }
            }
            
            if (hasBreak) {
                const spanCount = cells.length - breakCellIndex;
                if (spanCount > 1) {
                    const targetCell = cells[breakCellIndex];
                    
                    let tcPr = Array.from(targetCell.childNodes).find(n => n.nodeName === 'w:tcPr');
                    if (!tcPr) {
                        tcPr = docXml.createElement('w:tcPr');
                        targetCell.insertBefore(tcPr, targetCell.firstChild);
                    }
                    
                    // Horizontally merge the remaining cells into this single cell
                    let gridSpan = Array.from(tcPr.childNodes).find(n => n.nodeName === 'w:gridSpan');
                    if (!gridSpan) {
                        gridSpan = docXml.createElement('w:gridSpan');
                        tcPr.appendChild(gridSpan);
                    }
                    gridSpan.setAttribute('w:val', spanCount.toString());
                    
                    // Vertically center the text for aesthetics
                    let vAlign = Array.from(tcPr.childNodes).find(n => n.nodeName === 'w:vAlign');
                    if (!vAlign) {
                        vAlign = docXml.createElement('w:vAlign');
                        tcPr.appendChild(vAlign);
                    }
                    vAlign.setAttribute('w:val', 'center');
                    
                    // Horizontally center the paragraph
                    const p = Array.from(targetCell.childNodes).find(n => n.nodeName === 'w:p');
                    if (p) {
                        let pPr = Array.from(p.childNodes).find(n => n.nodeName === 'w:pPr');
                        if (!pPr) {
                            pPr = docXml.createElement('w:pPr');
                            p.insertBefore(pPr, p.firstChild);
                        }
                        let jc = Array.from(pPr.childNodes).find(n => n.nodeName === 'w:jc');
                        if (!jc) {
                            jc = docXml.createElement('w:jc');
                            pPr.appendChild(jc);
                        }
                        jc.setAttribute('w:val', 'center');
                    }
                    
                    // Destroy all redundant cells proceeding the break!
                    for (let c = breakCellIndex + 1; c < cells.length; c++) {
                        row.removeChild(cells[c]);
                    }
                }
            }
        }
        
        xmlContent = new XMLSerializer().serializeToString(docXml);
        zip.file('word/document.xml', xmlContent);
    }
    
    applyVerticalMerging(zip) {
        let xmlContent = zip.file('word/document.xml').asText();
        const docXml = new DOMParser().parseFromString(xmlContent, 'text/xml');
        
        function getOrCreateTcPr(cell, docXml) {
            let tcPr = Array.from(cell.childNodes).find(n => n.nodeName === 'w:tcPr');
            if (!tcPr) {
                tcPr = docXml.createElement('w:tcPr');
                cell.insertBefore(tcPr, cell.firstChild);
            }
            return tcPr;
        }

        const tables = docXml.getElementsByTagName('w:tbl');
        
        for (let tIdx = 0; tIdx < tables.length; tIdx++) {
            const table = tables[tIdx];
            const rows = Array.from(table.childNodes).filter(n => n.nodeName === 'w:tr');
            
            // Generate a 2D mapping grid recognizing gridSpans to trace true logical columns natively.
            const grid = [];
            for (let r = 0; r < rows.length; r++) {
                const row = rows[r];
                const cells = Array.from(row.childNodes).filter(n => n.nodeName === 'w:tc');
                const rowData = [];
                let logicalCol = 0;
                
                for (let c = 0; c < cells.length; c++) {
                    const cell = cells[c];
                    let span = 1;
                    const tcPr = Array.from(cell.childNodes).find(n => n.nodeName === 'w:tcPr');
                    if (tcPr) {
                        const gridSpan = Array.from(tcPr.childNodes).find(n => n.nodeName === 'w:gridSpan');
                        if (gridSpan) {
                            span = parseInt(gridSpan.getAttribute('w:val') || '1', 10);
                        }
                    }
                    
                    const text = Array.from(cell.getElementsByTagName('w:t')).map(t => t.textContent).join('').trim();
                    
                    for (let s = 0; s < span; s++) {
                        rowData[logicalCol] = { text, cell, isMaster: s === 0 };
                        logicalCol++;
                    }
                }
                grid.push(rowData);
            }
            
            const maxCols = Math.max(0, ...grid.map(r => r.length));
            
            // Sweep isolated logical columns vertically from top to bottom
            for (let col = 0; col < maxCols; col++) {
                let mergeStartRow = -1;
                let mergeText = null;
                
                for (let r = 0; r < rows.length; r++) {
                    const current = grid[r][col];
                    if (!current) {
                        mergeStartRow = -1;
                        mergeText = null;
                        continue;
                    }
                    
                    const cellText = current.text;
                    const cleanText = cellText.trim().replace(/\u200B/g, ''); 
                    const isExplicitMerge = cleanText === '^' || cleanText.toUpperCase() === 'MERGE';
                    
                    if (mergeStartRow !== -1 && current.isMaster && grid[mergeStartRow][col].isMaster && 
                       (isExplicitMerge || (cellText === mergeText && cleanText !== ''))) {
                        
                        const targetTcPr = getOrCreateTcPr(current.cell, docXml);
                        const vMerge = docXml.createElement('w:vMerge');
                        targetTcPr.appendChild(vMerge);
                        
                        // Strip residual text inside the visually suppressed cell
                        Array.from(current.cell.getElementsByTagName('w:t')).forEach(t => t.textContent = '');
                        
                        const startTcPr = getOrCreateTcPr(grid[mergeStartRow][col].cell, docXml);
                        let startVMerge = Array.from(startTcPr.childNodes).find(n => n.nodeName === 'w:vMerge');
                        if (!startVMerge) {
                            startVMerge = docXml.createElement('w:vMerge');
                            startVMerge.setAttribute('w:val', 'restart');
                            startTcPr.appendChild(startVMerge);
                            
                            let vAlign = Array.from(startTcPr.childNodes).find(n => n.nodeName === 'w:vAlign');
                            if (!vAlign) {
                                vAlign = docXml.createElement('w:vAlign');
                                startTcPr.appendChild(vAlign);
                            }
                            vAlign.setAttribute('w:val', 'center');
                        }
                    } else {
                        if (current.isMaster && cleanText !== '') {
                            mergeStartRow = r;
                            mergeText = cellText;
                        } else {
                            mergeStartRow = -1;
                            mergeText = null;
                        }
                    }
                }
            }
        }
        
        xmlContent = new XMLSerializer().serializeToString(docXml);
        zip.file('word/document.xml', xmlContent);
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
            
            // Post-process table merging for "BREAK" keywords
            this.applyBreakMerging(doc.getZip());
            
            // Post-process table merging for identical sequential layout cells (2-hour LABs)
            this.applyVerticalMerging(doc.getZip());
            
            fs.writeFileSync(outputPath, doc.getZip().generate({ type: 'nodebuffer' }));
            return outputPath;
        } catch (error) {
            console.error('Error rendering DOCX:', error.stack || error);
            return null;
        }
    }
}

module.exports = DocxRenderer;
