const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/login', (req, res) => {
    res.render('authentication/role_selection');
});

// Admin Login
router.get('/login/admin', (req, res) => {
    res.render('authentication/admin_login');
});

router.post('/login/admin', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.render('authentication/admin_login', { error: 'Invalid username or password' });
        
        if (user.role !== 'ADMIN') {
            req.logout(() => {});
            return res.render('authentication/admin_login', { error: 'Unauthorized: This login is for Admins only.' });
        }

        req.logIn(user, (err) => {
            if (err) return next(err);
            return res.redirect('/templates');
        });
    })(req, res, next);
});

// User Login
router.get('/login/user', (req, res) => {
    res.render('authentication/user_login');
});

router.post('/login/user', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.render('authentication/user_login', { error: 'Invalid username or password' });
        

        if (user.role !== 'USER') {
            req.logout(() => {});
            return res.render('authentication/user_login', { error: 'Please use the Admin login page.' });
        }

        req.logIn(user, (err) => {
            if (err) return next(err);
            return res.redirect('/templates');
        });
    })(req, res, next);
});

router.get('/register', (req, res) => {
    res.render('authentication/register');
});

router.post('/register', async (req, res) => {
    try {
        const { username, email, password, firstName, lastName } = req.body;
        
        // Basic unique check
        const existingUser = await prisma.user.findFirst({
            where: { OR: [{ username }, { email }] }
        });

        if (existingUser) {
            return res.status(400).send('Username or Email already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                firstName,
                lastName,
                role: 'USER' // New registrations are always standard users
            }
        });

        res.redirect('/login/user');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error during registration');
    }
});

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
        res.redirect('/login');
    });
});

module.exports = router;
