const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { generateReportFormDefinition } = require('../services/report/reportFormGenerator');

router.get('/:id', async (req, res) => {
    try {
        const template = await prisma.reportTemplate.findUnique({
            where: { id: parseInt(req.params.id) },
            include: { fields: { orderBy: { id: 'asc' } } }
        });

        if (!template) return res.status(404).send('Report template not found');

        const form_fields = generateReportFormDefinition(template.fields);

        res.render('reports/report_form', { template, form_fields });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error loading report form');
    }
});

module.exports = router;
