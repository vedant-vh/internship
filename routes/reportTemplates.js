const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const ReportTemplateParser = require('../services/report/reportTemplateParser');
const { isAdmin } = require('../middleware/auth');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = 'media/report_templates/';
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

// List all report templates
router.get('/', async (req, res) => {
    const templates = await prisma.reportTemplate.findMany({
        orderBy: { createdAt: 'desc' }
    });
    res.render('reports/report_template_list', { templates });
});

// Upload
router.get('/upload', isAdmin, (req, res) => {
    res.render('reports/upload_report_template');
});

// upload+parse
router.post('/upload', isAdmin, upload.single('template_file'), async (req, res) => {
    try {
        const { name } = req.body;
        const templateFile = req.file.path;

        const template = await prisma.reportTemplate.create({
            data: { name, templateFile }
        });

        const parser = new ReportTemplateParser(templateFile);
        const { fields } = await parser.extractFields();

        for (const field of fields) {
            await prisma.reportField.create({
                data: {
                    reportTemplateId: template.id,
                    fieldName: field.fieldName,
                    label: field.label,
                    fieldType: field.fieldType,
                    isGroup: field.isGroup,
                    groupName: field.groupName || null
                }
            });
        }

        res.redirect('/report-templates');
    } catch (error) {
        console.error('Error uploading report template:', error);
        res.status(500).send('Error uploading report template');
    }
});

// Detail view
router.get('/:id', async (req, res) => {
    const template = await prisma.reportTemplate.findUnique({
        where: { id: parseInt(req.params.id) },
        include: {
            fields: { orderBy: { id: 'asc' } },
            generatedReports: {
                where: req.user.role === 'ADMIN' ? {} : { createdById: req.user.id },
                orderBy: { createdAt: 'desc' }
            }
        }
    });
    if (!template) return res.status(404).send('Report template not found');
    res.render('reports/report_template_detail', {
        template,
        fields: template.fields,
        generatedReports: template.generatedReports
    });
});

// Delete
router.post('/:id/delete', isAdmin, async (req, res) => {
    try {
        await prisma.reportTemplate.delete({
            where: { id: parseInt(req.params.id) }
        });
        res.redirect('/report-templates');
    } catch (error) {
        console.error('Error deleting report template:', error);
        res.status(500).send('Error deleting report template');
    }
});

// Rename
router.post('/:id/rename', isAdmin, async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { newName } = req.body;
        if (!newName || newName.trim() === '') {
            return res.status(400).send('New name is required');
        }
        await prisma.reportTemplate.update({
            where: { id },
            data: { name: newName.trim() }
        });
        res.redirect('/report-templates');
    } catch (error) {
        console.error('Error renaming report template:', error);
        res.status(500).send('Error renaming report template');
    }
});

router.get('/:id/download', isAdmin, async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const template = await prisma.reportTemplate.findUnique({ where: { id } });
        if (!template) return res.status(404).send('Template not found');
        
        const fullPath = path.join(process.cwd(), template.templateFile);
        if (!fs.existsSync(fullPath)) return res.status(404).send('File missing on disk');
        
        res.download(fullPath);
    } catch (error) {
        console.error('Error downloading template:', error);
        res.status(500).send('Error downloading template');
    }
});

module.exports = router;
