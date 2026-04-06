const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { generateFormDefinition } = require('../services/formGenerator');

router.get('/:templateId', async (req, res) => {
    const templateId = parseInt(req.params.templateId);
    const template = await prisma.template.findUnique({
        where: { id: templateId },
        include: { fields: { orderBy: { id: 'asc' } } }
    });

    if (!template) return res.status(404).send('Template not found');

    const formFields = generateFormDefinition(template.fields);

    res.render('form_builder/dynamic_form', { template, form_fields: formFields });
});

module.exports = router;
