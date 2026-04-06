const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function seed() {
    const adminPassword = await bcrypt.hash('admin123', 10);
    const userPassword = await bcrypt.hash('user123', 10);

    // Create dummy users
    await prisma.user.upsert({
        where: { username: 'admin' },
        update: { role: 'ADMIN' },
        create: {
            username: 'admin',
            email: 'admin@example.com',
            password: adminPassword,
            role: 'ADMIN'
        }
    });

    await prisma.user.upsert({
        where: { username: 'user' },
        update: { role: 'USER' },
        create: {
            username: 'user',
            email: 'user@example.com',
            password: userPassword,
            role: 'USER'
        }
    });

    console.log('Dummy accounts created: admin/admin123, user/user123');
    await prisma.$disconnect();
}

seed().catch(e => {
    console.error(e);
    process.exit(1);
});
