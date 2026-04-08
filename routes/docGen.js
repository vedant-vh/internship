const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const DocxRenderer = require('../services/docxRenderer');
const mammoth = require('mammoth');

router.get('/preview/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const doc = await prisma.generatedDocument.findUnique({
            where: { id }
        });

        if (!doc) return res.status(404).send('Document record not found');

        const fullPath = path.join(process.cwd(), doc.filePath);
        if (!fs.existsSync(fullPath)) {
            return res.status(404).send('Physical file missing from server disk');
        }

        const result = await mammoth.convertToHtml({ path: fullPath });
        const html = result.value; // generated HTML
        
        res.render('docGen/preview', { 
            html, 
            title: 'Document Preview',
            fileName: path.basename(doc.filePath)
        });
    } catch (error) {
        console.error('Preview error:', error);
        res.status(500).send('Error generating preview');
    }
});

router.post('/:templateId', async (req, res) => {
    try {
        const templateId = parseInt(req.params.templateId);
        const template = await prisma.template.findUnique({
            where: { id: templateId }
        });

        if (!template) return res.status(404).send('Template not found');

        const action = req.body.action;
        const context = { ...req.body };
        delete context._csrf;
        delete context.action;

        for (const key in context) {
            if (typeof context[key] === 'string' && context[key].startsWith('[') && context[key].endsWith(']')) {
                try {
                    context[key] = JSON.parse(context[key]);
                } catch (e) {
                    // Stay as string if not valid json
                }
            }
        }

        const renderer = new DocxRenderer();
        const outputPath = await renderer.renderDocument(template.templateFile, context);

        if (!outputPath) return res.status(500).send('Error generating document');

        if (action === 'preview') {
            const result = await mammoth.convertToHtml({ path: outputPath });
            // Delete the temporary file right away to preserve disk space
            if (fs.existsSync(outputPath)) {
                fs.unlinkSync(outputPath);
            }
            return res.render('docGen/preview', { 
                html: result.value, 
                title: 'Document Preview',
                fileName: 'Temporary Preview Only (Not Saved)'
            });
        }

        // Save to history (if downloading)
        const relativePath = path.relative(process.cwd(), outputPath).replace(/\\/g, '/');
        await prisma.generatedDocument.create({
            data: {
                templateId: template.id,
                filePath: relativePath,
                createdById: req.user ? req.user.id : null
            }
        });

        res.download(outputPath);

    } catch (error) {
        console.error(error);
        res.status(500).send('Error in document generation');
    }
});

module.exports = router;
