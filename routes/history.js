const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {

    const whereClause = req.user.role === 'ADMIN' ? {} : { createdById: req.user.id };
    
    const history = await prisma.generatedDocument.findMany({
        where: whereClause,
        include: { template: true },
        orderBy: { createdAt: 'desc' }
    });
    res.render('document_history/history_list', { history });
});

// download route
router.get('/download/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const doc = await prisma.generatedDocument.findUnique({ where: { id } });

        if (!doc) return res.status(404).send('Document not found');

        const fullPath = path.resolve(process.cwd(), doc.filePath);
        if (!fs.existsSync(fullPath)) {
            return res.status(404).send('File not found on server');
        }

        const filename = path.basename(fullPath);
        res.download(fullPath, filename);
    } catch (err) {
        console.error('Download error:', err);
        res.status(500).send('Error downloading file');
    }
});

module.exports = router;
