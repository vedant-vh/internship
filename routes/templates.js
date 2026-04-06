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

        // Create table fields
        for (const table of structure.loop_tables) {
            await prisma.templateField.create({
                data: {
                    templateId: template.id,
                    fieldName: table.name,
                    label: table.name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                    fieldType: 'table',
                    isTable: true
                }
            });

            for (const col of table.columns) {
                await prisma.templateField.create({
                    data: {
                        templateId: template.id,
                        fieldName: col.name,
                        label: col.name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                        fieldType: col.type,
                        isTable: true
                    }
                });
            }
        }

        // Create normal fields
        for (const placeholder of structure.placeholders) {
            await prisma.templateField.create({
                data: {
                    templateId: template.id,
                    fieldName: placeholder.name,
                    label: placeholder.name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                    fieldType: placeholder.type
                }
            });
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
        
        // Delete from database
        // Cascade delete (defined in schema) will handle TemplateField and GeneratedDocument records
        await prisma.template.delete({
            where: { id }
        });

        // Note: As requested, physical files are NOT removed from the disk.
        
        res.redirect('/templates');
    } catch (error) {
        console.error('Error deleting template:', error);
        res.status(500).send('Error deleting template from database');
    }
});

module.exports = router;
