const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const TemplateParser = require('../services/templateParser');
const { isAdmin } = require('../middleware/auth');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = 'media/templates/';
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

router.get('/', async (req, res) => {
    const templates = await prisma.template.findMany({
        orderBy: { createdAt: 'desc' }
    });
    res.render('templates_management/template_list', { templates });
});

router.get('/upload', isAdmin, (req, res) => {
    res.render('templates_management/upload_template');
});

router.post('/upload', isAdmin, upload.single('template_file'), async (req, res) => {
    try {
        const { name } = req.body;
        const templateFile = req.file.path;

        const template = await prisma.template.create({
            data: { name, templateFile }
        });

        // Parse template and create fields
        const parser = new TemplateParser(templateFile);
        const structure = await parser.extractFullStructure();

        const createdFields = new Set();

        // table fields
        for (const table of structure.loop_tables) {
            if (!createdFields.has(table.name)) {
                await prisma.templateField.create({
                    data: {
                        templateId: template.id,
                        fieldName: table.name,
                        label: table.name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                        fieldType: 'table',
                        isTable: true
                    }
                });
                createdFields.add(table.name);
            }

            for (const col of table.columns) {
                if (!createdFields.has(col.name)) {
                    await prisma.templateField.create({
                        data: {
                            templateId: template.id,
                            fieldName: col.name,
                            label: col.name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                            fieldType: col.type,
                            isTable: true
                        }
                    });
                    createdFields.add(col.name);
                }
            }
        }

        // normal fields
        for (const placeholder of structure.placeholders) {
            if (!createdFields.has(placeholder.name)) {
                await prisma.templateField.create({
                    data: {
                        templateId: template.id,
                        fieldName: placeholder.name,
                        label: placeholder.name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                        fieldType: placeholder.type
                    }
                });
                createdFields.add(placeholder.name);
            }
        }

        res.redirect('/templates');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error uploading template');
    }
});

router.get('/:id', async (req, res) => {
    const template = await prisma.template.findUnique({
        where: { id: parseInt(req.params.id) },
        include: { 
            fields: {
                orderBy: { id: 'asc' }
            },
            generatedDocuments: {
                where: req.user.role === 'ADMIN' ? {} : { createdById: req.user.id },
                orderBy: { createdAt: 'desc' }
            }
        }
    });
    if (!template) return res.status(404).send('Template not found');
    res.render('templates_management/template_detail', { 
        template, 
        fields: template.fields,
        generatedDocuments: template.generatedDocuments
    });
});

router.post('/:id/delete', isAdmin, async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        
        await prisma.template.delete({
            where: { id }
        });

        
        res.redirect('/templates');
    } catch (error) {
        console.error('Error deleting template:', error);
        res.status(500).send('Error deleting template from database');
    }
});

router.post('/:id/rename', isAdmin, async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { newName } = req.body;
        if (!newName || newName.trim() === '') {
            return res.status(400).send('New name is required');
        }
        await prisma.template.update({
            where: { id },
            data: { name: newName.trim() }
        });
        res.redirect('/templates');
    } catch (error) {
        console.error('Error renaming template:', error);
        res.status(500).send('Error renaming template');
    }
});

router.get('/:id/download', isAdmin, async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const template = await prisma.template.findUnique({ where: { id } });
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
