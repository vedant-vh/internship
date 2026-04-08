require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

let dbUrl = process.env.DATABASE_URL;
if (dbUrl && dbUrl.startsWith('file:./') && !dbUrl.includes('/prisma/')) {
    dbUrl = `file:${path.join(__dirname, 'prisma', dbUrl.substring(7))}`;
}

const prisma = new PrismaClient({
    datasources: {
        db: { url: dbUrl }
    }
});

const expressLayouts = require('express-ejs-layouts');

const app = express();

let PORT = parseInt(process.env.PORT) || 3000;

// Configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.use('/media', express.static(path.join(__dirname, 'media')));

app.use(session({
    secret: process.env.SECRET_KEY || 'development-secret-key-12345',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Global locals
app.use((req, res, next) => {
    res.locals.title = 'Document Portal';
    res.locals.user = req.user || null;
    res.locals.scripts = '';
    next();
});

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const user = await prisma.user.findUnique({ where: { username } });
        if (!user) return done(null, false, { message: 'Incorrect username.' });
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return done(null, false, { message: 'Incorrect password.' });
        
        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
    try {
        const user = await prisma.user.findUnique({ where: { id } });
        done(null, user);
    } catch (err) {
        done(err);
    }
});

// Auth Middleware
const { ensureAuthenticated, isAdmin } = require('./middleware/auth');

// Routes
const authRoutes = require('./routes/auth');
const templateRoutes = require('./routes/templates');
const formRoutes = require('./routes/forms');
const docGenRoutes = require('./routes/docGen');
const historyRoutes = require('./routes/history');

// Report subsystem routes (isolated)
const reportTemplateRoutes = require('./routes/reportTemplates');
const reportFormRoutes = require('./routes/reportForms');
const reportGenRoutes = require('./routes/reportGen');
const reportHistoryRoutes = require('./routes/reportHistory');

app.use('/', authRoutes);
app.use('/templates', ensureAuthenticated, templateRoutes);
app.use('/forms', ensureAuthenticated, formRoutes);
app.use('/generate', ensureAuthenticated, docGenRoutes);
app.use('/history', ensureAuthenticated, historyRoutes);

// Report subsystem
app.use('/report-templates', ensureAuthenticated, reportTemplateRoutes);
app.use('/report-forms', ensureAuthenticated, reportFormRoutes);
app.use('/report-generate', ensureAuthenticated, reportGenRoutes);
app.use('/report-history', ensureAuthenticated, reportHistoryRoutes);

app.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/templates');
    } else {
        res.redirect('/login');
    }
});



function startServer(portToTry) {
    const server = app.listen(portToTry);

    server.on('listening', () => {
        const addr = server.address();
        const actualPort = typeof addr === 'string' ? addr : addr.port;
        console.log(`\x1b[32m%s\x1b[0m`, `✔ Server is running on http://localhost:${actualPort}`);
        if (dbUrl) console.log(`\x1b[36m%s\x1b[0m`, `ℹ Using Database: ${dbUrl}`);
    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.warn(`⚠ Port ${portToTry} is busy, trying ${portToTry + 1}...`);
            startServer(portToTry + 1);
        } else {
            console.error('✘ Server error:', err);
        }
    });
}

startServer(PORT);

module.exports = app;
