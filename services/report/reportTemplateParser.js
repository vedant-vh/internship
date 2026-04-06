const PizZip = require('pizzip');
const fs = require('fs');
const { DOMParser } = require('xmldom');

/**
 * Parses a .docx report template.
 * Key differences from the document TemplateParser:
 *  - ALL non-image, non-date text fields default to 'textarea'
 *  - Fields matching /^(.+?)_\d+$/ or /^(.+?)\d+$/ are grouped as dynamic lists
 *  - Fields with 'image' in name are type 'image'
 *  - Numbered image fields are 'dynamic-image-group'
 *  - Numbered text fields are 'dynamic-text-group'
 */
class ReportTemplateParser {
    constructor(filePath) {
        this.filePath = filePath;
    }

    /**
     * Determine the base name and number (if any) for a field.
     * Returns { baseName, number } or null if not numbered.
     * Supports: "name_1", "name_2", "image1", "image2"
     */
    getNumberedGroup(fieldName) {
        // Pattern: baseName_N  (e.g., organizer_1, event_image_1)
        const underscoreMatch = fieldName.match(/^(.+?)_(\d+)$/);
        if (underscoreMatch) {
            return { baseName: underscoreMatch[1], number: parseInt(underscoreMatch[2]) };
        }
        // Pattern: baseNameN  (e.g., feedback_image1)
        const noUnderscoreMatch = fieldName.match(/^(.+?)(\d+)$/);
        if (noUnderscoreMatch) {
            return { baseName: noUnderscoreMatch[1], number: parseInt(noUnderscoreMatch[2]) };
        }
        return null;
    }

    guessFieldType(fieldName) {
        const name = fieldName.toLowerCase();
        
        // Serial number column
        const SR_NO_RE = /^(sr[_.]?no\.?|s[_.]?no\.?|serial[_.]?no\.?|sr_?num|sno|sl[_.]?no\.?)$/i;
        if (SR_NO_RE.test(name)) return 'srno';

        if (name.includes('date')) return 'date';
        if (name.includes('image') || name.includes('photo') || name.includes('picture')) return 'image';
        return 'textarea';
    }

    async extractFields() {
        if (!fs.existsSync(this.filePath)) {
            throw new Error(`Report template not found: ${this.filePath}`);
        }

        const content = fs.readFileSync(this.filePath, 'binary');
        const zip = new PizZip(content);
        const xmlContent = zip.file('word/document.xml').asText();
        const doc = new DOMParser().parseFromString(xmlContent, 'text/xml');

        // Collect all text from w:t nodes
        const tNodes = doc.getElementsByTagName('w:t');
        let fullText = '';
        for (let i = 0; i < tNodes.length; i++) {
            fullText += tNodes[i].textContent;
        }

        // Extract all {{placeholder}} matches
        const matches = fullText.match(/\{\{(.*?)\}\}/g) || [];
        const seen = new Set();
        const rawFields = [];

        matches.forEach(m => {
            const name = m.replace(/[{}]/g, '').trim();
            // Skip docxtemplater control syntax
            if (name.startsWith('#') || name.startsWith('/') || name.startsWith('^') || name.startsWith('%')) return;
            if (!seen.has(name)) {
                seen.add(name);
                rawFields.push(name);
            }
        });

        // Classify fields
        const groups = {}; // baseName -> { type, members[] }
        const singleFields = [];

        // --- NEW: Detect Table Loops ---
        const loopTables = this.extractLoopTables(doc);
        
        // Filter out placeholders that are actually table columns (item.column_name)
        const filteredRawFields = rawFields.filter(f => {
            return !loopTables.some(table => f.startsWith(table.itemVar + '.'));
        });

        filteredRawFields.forEach(fieldName => {
            const numbered = this.getNumberedGroup(fieldName);
            const baseType = this.guessFieldType(fieldName);

            if (numbered) {
                const { baseName } = numbered;
                if (!groups[baseName]) {
                    const groupType = baseType === 'image' ? 'dynamic-image-group' : 'dynamic-text-group';
                    groups[baseName] = { type: groupType, members: [] };
                }
                groups[baseName].members.push(fieldName);
            } else {
                singleFields.push({ fieldName, fieldType: baseType });
            }
        });

        // Build final field definitions
        const fields = [];

        singleFields.forEach(({ fieldName, fieldType }) => {
            fields.push({
                fieldName,
                label: this._makeLabel(fieldName),
                fieldType,
                isGroup: false,
                groupName: null
            });
        });

        Object.entries(groups).forEach(([baseName, group]) => {
            fields.push({
                fieldName: baseName,
                label: this._makeLabel(baseName),
                fieldType: group.type,
                isGroup: true,
                groupName: baseName,
                _memberCount: group.members.length
            });
        });

        // Add loop tables as a sequence of fields (Root followed by Columns)
        // This allows we to store them in a flat DB without a migration
        loopTables.forEach(table => {
            // 1. Table Root (the container)
            fields.push({
                fieldName: table.name,
                label: this._makeLabel(table.name),
                fieldType: 'table',
                isGroup: true,
                groupName: table.name
            });

            // 2. Table Columns (follow immediately)
            table.columns.forEach(col => {
                fields.push({
                    fieldName: `${table.name}__${col}`, // Unique name for DB
                    label: this._makeLabel(col),
                    fieldType: this.guessFieldType(col),
                    isGroup: true,
                    groupName: table.name
                });
            });
        });

        return { fields, rawGroups: groups, loopTables };
    }

    extractLoopTables(doc) {
        const tNodes = doc.getElementsByTagName('w:t');
        let fullText = '';
        for (let i = 0; i < tNodes.length; i++) {
            fullText += tNodes[i].textContent;
        }
        
        const tables = [];
        const loopRegex = /\{\s*%\s*tr\s+for\s+(\w+)\s+in\s+([\w.]+)\s*%\s*\}/g;
        let match;
        
        const matches = fullText.match(/\{\{(.*?)\}\}/g) || [];
        const allPlaceholders = matches.map(m => m.replace(/[{}]/g, '').trim());

        while ((match = loopRegex.exec(fullText)) !== null) {
            const itemVar = match[1];
            const listName = match[2];
            
            const columns = allPlaceholders
                .filter(p => p.startsWith(itemVar + '.'))
                .map(p => p.split('.')[1]);

            tables.push({
                name: listName,
                itemVar: itemVar,
                columns: [...new Set(columns)]
            });
        }
        return tables;
    }

    _makeLabel(name) {
        return name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
}

module.exports = ReportTemplateParser;
