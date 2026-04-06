const { PrismaClient } = require('@prisma/client');
const TemplateParser = require('../services/templateParser');

const prisma = new PrismaClient();
const parser = new TemplateParser('');

async function sync() {
    console.log('Starting field type synchronization...');
    
    const fields = await prisma.templateField.findMany();
    let updatedCount = 0;

    for (const field of fields) {
        if (field.isTable && field.fieldType === 'table') continue;

        const newType = parser.guessFieldType(field.fieldName);
        
        if (newType !== field.fieldType) {
            await prisma.templateField.update({
                where: { id: field.id },
                data: { fieldType: newType }
            });
            console.log(`Updated field "${field.fieldName}" (ID: ${field.id}): ${field.fieldType} -> ${newType}`);
            updatedCount++;
        }
    }

    console.log(`Finished synchronizing ${updatedCount} fields.`);
    await prisma.$disconnect();
}

sync().catch(err => {
    console.error('Error during sync:', err);
    process.exit(1);
});
