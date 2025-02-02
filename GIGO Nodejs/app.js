// Required modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');  // Import Handlebars

// Routes
var adminRouter = require('./routes/admin');
var providerRouter = require('./routes/provider')
var usersRouter = require('./routes/users');

// Initialize the Express app
var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views')); // Set views directory
hbs.registerPartials(path.join(__dirname, 'views/partials')); // Register partials directory
app.set('view engine', 'hbs'); // Set Handlebars as the view engine

// Middleware setup
app.use(logger('dev')); // Log HTTP requests
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(cookieParser()); // Parse cookies
app.use(express.static(path.join(__dirname, 'public')));  // Serve static files (CSS, JS)

// Add dynamic data for layout based on user role
app.use(function (req, res, next) {
    // Assuming that req.user is set by authentication middleware (e.g., passport or session)
    const userRole = req.user ? req.user.role : null;

    // Set flags for different user roles
    let isUser = userRole === 'user';
    let isAdmin = userRole === 'admin';
    let isProvider = userRole === 'provider';

    // Attach role flags to locals so they can be accessed in layouts and headers
    res.locals.isUser = isUser;
    res.locals.isAdmin = isAdmin;
    res.locals.isProvider = isProvider;

    next();
});

// Define routes
app.use('/', usersRouter);  // Users routes
app.use('/provider', providerRouter);
app.use('/admin', adminRouter);  // Admin routes

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404)); // Handle 404 errors
});

// Error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message; // Set error message
    res.locals.error = req.app.get('env') === 'development' ? err : {}; // Include error details in development mode

    // Render error page
    res.status(err.status || 500);
    res.render('error');
});

// Export the app module for use in other parts of the application
module.exports = app;