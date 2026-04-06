const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function fixPaths() {
    console.log('--- Starting Database Path Repair ---');
    
    // 1. Repair GeneratedDocuments
    const docs = await prisma.generatedDocument.findMany({
        where: { filePath: { contains: '\\' } }
    });
    console.log(`Found ${docs.length} documents with backslashes.`);
    
    for (const doc of docs) {
        const fixed = doc.filePath.replace(/\\/g, '/');
        await prisma.generatedDocument.update({
            where: { id: doc.id },
            data: { filePath: fixed }
        });
        console.log(`  Fixed Doc ID ${doc.id}: ${doc.filePath} -> ${fixed}`);
    }

    // 2. Repair GeneratedReports
    const reports = await prisma.generatedReport.findMany({
        where: { filePath: { contains: '\\' } }
    });
    console.log(`Found ${reports.length} reports with backslashes.`);
    
    for (const report of reports) {
        const fixed = report.filePath.replace(/\\/g, '/');
        await prisma.generatedReport.update({
            where: { id: report.id },
            data: { filePath: fixed }
        });
        console.log(`  Fixed Report ID ${report.id}: ${report.filePath} -> ${fixed}`);
    }

    console.log('--- Path Repair Complete ---');
}

fixPaths()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
        process.exit();
    });
