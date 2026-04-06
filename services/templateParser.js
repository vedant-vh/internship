const PizZip = require('pizzip');
const fs = require('fs');
const { DOMParser } = require('xmldom');

class TemplateParser {
    constructor(filePath) {
        this.filePath = filePath;
        this.zip = null;
        this.documentXml = null;
    }

    guessFieldType(fieldName) {
        const name = fieldName.toLowerCase();

        // 0. Serial number column — auto-generated, hidden from user input
        const SR_NO_RE = /^(sr[_.]?no\.?|s[_.]?no\.?|serial[_.]?no\.?|sr_?num|sno|sl[_.]?no\.?)$/i;
        if (SR_NO_RE.test(name)) return 'srno';

        // 1. Loop markers and special placeholders should be hidden
        if (name.startsWith('#') || name.startsWith('/') || name.startsWith('^') || name.startsWith('%')) {
            return 'hidden';
        }

        // 2. Specific types
        if (name.includes('date')) return 'date';
        if (name.includes('time')) return 'time';
        if (name.includes('email')) return 'email';
        
        // 3. Dropdowns (ensure 'academic_year' doesn't match 'year' dropdown)
        if (/\byear\b/.test(name) && !name.includes('academic')) {
            return 'select:FE,SE,TE,BE';
        }
        if (name.includes('semester')) return 'select:1,2,3,4,5,6,7,8';
        
        // 4. User's explicit Textarea list (MUST check before text whitelist)
        const textareaKeywords = [
            'note', 'color_code', 'topicwise_contents', 'references', 
            'remarks_by_coordinator', 'group_information', 'group_members', 
            'sponsorship_details', 'problem_statement', 'context', 'resources_required',
            'description', 'comment', 'remark'
        ];

        if (textareaKeywords.some(kw => name.includes(kw))) {
            return 'textarea';
        }

        // 5. User's explicit Text whitelist
        const textKeywords = [
            'department', 'academic_year', 'day', 'coordinator', 'hod', 
            'branch', 'semester', 'number', 'incharge', 'supervisor', 
            'title', 'name', 'roll_no', 'subject', 'guide'
        ];

        if (textKeywords.some(kw => name.includes(kw))) {
            // Check for short identifiers with boundaries to avoids over-matching
            const shortIds = ['fe', 'se', 'te', 'be'];
            if (shortIds.some(id => new RegExp(`\\b${id}\\b`).test(name))) {
                return 'text';
            }
            // If it matches a long keyword, it's text
            if (textKeywords.filter(kw => !shortIds.includes(kw)).some(kw => name.includes(kw))) {
                return 'text';
            }
        }

        // 6. Default to textarea for unknown fields
        return 'textarea';
    }

    async loadDocument() {
        try {
            if (!fs.existsSync(this.filePath)) {
                return false;
            }
            const content = fs.readFileSync(this.filePath, 'binary');
            this.zip = new PizZip(content);
            const xmlContent = this.zip.file('word/document.xml').asText();
            this.documentXml = new DOMParser().parseFromString(xmlContent, 'text/xml');
            return true;
        } catch (error) {
            console.error('Error loading DOCX:', error);
            return false;
        }
    }

    // Helper to get text from nodes
    getTextFromNode(node) {
        let text = "";
        const tNodes = node.getElementsByTagName('w:t');
        for (let i = 0; i < tNodes.length; i++) {
            text += tNodes[i].textContent;
        }
        return text;
    }

    getNormalizedText() {
        if (!this.documentXml) return "";
        // Extract all text content from w:t nodes to avoid fragmented placeholders
        const tNodes = this.documentXml.getElementsByTagName('w:t');
        let fullText = "";
        for (let i = 0; i < tNodes.length; i++) {
            fullText += tNodes[i].textContent;
        }
        return fullText;
    }

    extractPlaceholders() {
        const text = this.getNormalizedText();
        const matches = text.match(/\{\{(.*?)\}\}/g) || [];
        const placeholders = new Set();
        matches.forEach(match => {
            placeholders.add(match.replace(/[{}]/g, '').trim());
        });
        return Array.from(placeholders);
    }

    extractLoopTables() {
        const text = this.getNormalizedText();
        const tables = [];
        // Consistent, forgiving regex
        const loopRegex = /\{\s*%\s*tr\s+for\s+(\w+)\s+in\s+([\w.]+)\s*%\s*\}/g;
        let match;
        
        const allPlaceholders = this.extractPlaceholders();

        while ((match = loopRegex.exec(text)) !== null) {
            const itemVar = match[1];
            const listName = match[2];
            
            const columns = allPlaceholders
                .filter(p => p.startsWith(itemVar + '.'))
                .map(p => p.split('.')[1]);

            tables.push({
                name: listName,
                itemVar: itemVar,
                type: 'table',
                columns: [...new Set(columns)]
            });
        }
        return tables;
    }

    async extractFullStructure() {
        const loaded = await this.loadDocument();
        if (!loaded) return { placeholders: [], loop_tables: [] };

        const placeholders = this.extractPlaceholders();
        const loopTables = this.extractLoopTables();

        const filteredPlaceholders = placeholders
            .filter(p => !loopTables.some(table => p.startsWith(table.itemVar + '.')))
            .map(p => ({
                name: p,
                type: this.guessFieldType(p)
            }));

        const loopTablesWithTypes = loopTables.map(table => ({
            ...table,
            columns: table.columns.map(col => ({
                name: col,
                type: this.guessFieldType(col)
            }))
        }));

        return {
            placeholders: filteredPlaceholders,
            loop_tables: loopTablesWithTypes
        };
    }
}

module.exports = TemplateParser;
