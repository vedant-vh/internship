const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
    const whereClause = req.user.role === 'ADMIN' ? {} : { createdById: req.user.id };

    const history = await prisma.generatedReport.findMany({
        where: whereClause,
        include: { reportTemplate: true },
        orderBy: { createdAt: 'desc' }
    });

    res.render('reports/report_history', { history });
});

// Dedicated download route — uses res.download() with proper headers
router.get('/download/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const report = await prisma.generatedReport.findUnique({ where: { id } });

        if (!report) return res.status(404).send('Report not found');

        const fullPath = path.resolve(process.cwd(), report.filePath);
        if (!fs.existsSync(fullPath)) {
            return res.status(404).send('File not found on server');
        }

        const filename = path.basename(fullPath);
        res.download(fullPath, filename);
    } catch (err) {
        console.error('Report download error:', err);
        res.status(500).send('Error downloading file');
    }
});

module.exports = router;
