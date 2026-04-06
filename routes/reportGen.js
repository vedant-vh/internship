const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const ReportRenderer = require('../services/report/reportRenderer');
const mammoth = require('mammoth');

// Multer: store uploaded images in a temp folder, keep them for embedding
const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = 'media/report_image_uploads/';
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname);
    }
});
const upload = multer({ storage: imageStorage });

// Preview a generated report
router.get('/preview/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const report = await prisma.generatedReport.findUnique({ where: { id } });

        if (!report) return res.status(404).send('Report record not found');

        const fullPath = path.join(process.cwd(), report.filePath);
        if (!fs.existsSync(fullPath)) {
            return res.status(404).send('Physical file missing from server disk');
        }

        const result = await mammoth.convertToHtml({ path: fullPath });
        res.render('reports/report_preview', {
            html: result.value,
            title: 'Report Preview',
            fileName: path.basename(report.filePath)
        });
    } catch (error) {
        console.error('Report preview error:', error);
        res.status(500).send('Error generating preview');
    }
});

// Generate report — accepts any number of image files via multipart
router.post('/:templateId', upload.any(), async (req, res) => {
    try {
        const templateId = parseInt(req.params.templateId);
        const template = await prisma.reportTemplate.findUnique({
            where: { id: templateId },
            include: { fields: true }
        });

        if (!template) return res.status(404).send('Report template not found');

        // Build context from text form fields
        const context = {};
        for (const [key, value] of Object.entries(req.body)) {
            if (typeof value === 'string' && value.startsWith('[') && value.endsWith(']')) {
                try {
                    context[key] = JSON.parse(value);
                } catch (e) {
                    context[key] = value;
                }
            } else {
                context[key] = value;
            }
        }

        // Map uploaded image files into context
        // Image files are submitted with fieldnames like: event_image[], feedback_image[]
        const groupedImages = {};
        if (req.files && req.files.length > 0) {
            req.files.forEach(file => {
                // fieldname is "event_image[]" or "feedback_image[]"
                const groupName = file.fieldname.replace('[]', '');
                if (!groupedImages[groupName]) groupedImages[groupName] = [];
                groupedImages[groupName].push(fs.readFileSync(file.path));
            });
        }

        // Merge image groups into context
        Object.assign(context, groupedImages);

        const renderer = new ReportRenderer();
        const outputPath = await renderer.renderReport(template.templateFile, context, template.fields);

        if (!outputPath) return res.status(500).send('Error generating report');

        // Save to report history
        const relativePath = path.relative(process.cwd(), outputPath).replace(/\\/g, '/');
        await prisma.generatedReport.create({
            data: {
                reportTemplateId: template.id,
                filePath: relativePath,
                createdById: req.user ? req.user.id : null
            }
        });

        res.download(outputPath);

    } catch (error) {
        console.error('Report generation error:', error);
        res.status(500).send('Error in report generation');
    }
});

module.exports = router;
