const express = require('express');
const router = express.Router();

/**
 * @route   GET /provider
 * @desc    Render Provider Home Page
 * @access  Private (Requires Authentication)
 */
router.get('/', (req, res) => {
    try {
        req.user = { role: 'provider' }; // REMOVE after debugging

        const userRole = req.user ? req.user.role : null;
        const isUser = userRole === 'user';
        const isAdmin = userRole === 'admin';
        const isProvider = userRole === 'provider';

        console.log("DEBUG: Provider Home - User Role:", userRole);

        res.status(200).render('provider/home_page', {
            title: 'Provider Home',
            isAdmin,
            isProvider,
            isUser,
            isHeaderPage: true,
            isSidebarPage: true
        });
    } catch (error) {
        console.error("Error loading Provider Home Page:", error);
        res.status(500).send("Internal Server Error");
    }
});

/**
 * @route   GET /provider/global
 * @desc    Render Global Network Page
 * @access  Private (Requires Authentication)
 */
router.get('/global', (req, res) => {
    try {
        req.user = { role: 'provider' }; // REMOVE this after debugging

        const userRole = req.user ? req.user.role : null;
        const isUser = userRole === 'user';
        const isAdmin = userRole === 'admin';
        const isProvider = userRole === 'provider';

        res.render('provider/global_page', {
            title: 'Global Network',
            isAdmin,
            isProvider,
            isUser,
            isHeaderPage: true,
            isSidebarPage: true
        });
    } catch (error) {
        console.error("Error loading Global Network Page:", error);
        res.status(500).send("Internal Server Error");
    }
});

/**
 * @route   GET /provider/history
 * @desc    Render Provider History Page
 * @access  Private (Requires Authentication)
 */
router.get('/history', (req, res) => {
    try {
        req.user = { role: 'provider' }; // REMOVE after debugging

        const userRole = req.user ? req.user.role : null;
        const isUser = userRole === 'user';
        const isAdmin = userRole === 'admin';
        const isProvider = userRole === 'provider';

        console.log("DEBUG: Provider History - User Role:", userRole);

        res.status(200).render('provider/history_page', {
            title: 'Provider History',
            isAdmin,
            isProvider,
            isUser,
            isHeaderPage: true,
            isSidebarPage: true,

        });
    } catch (error) {
        console.error("Error loading Provider History Page:", error);
        res.status(500).send("Internal Server Error");
    }
});

/**
 * @route   GET /provider/add_ork
 * @desc    Render Add Work Page
 * @access  Private (Requires Authentication)
 */
router.get('/add_work', (req, res) => {
    try {
        req.user = { role: 'provider' }; // REMOVE after debugging

        const userRole = req.user ? req.user.role : null;
        const isUser = userRole === 'user';
        const isAdmin = userRole === 'admin';
        const isProvider = userRole === 'provider';

        console.log("DEBUG: Add Work Page - User Role:", userRole);

        res.status(200).render('provider/add_work_page', {
            title: 'Add Work',
            isAdmin,
            isProvider,
            isUser,
            isHeaderPage: true,
            isSidebarPage: true,
        });
    } catch (error) {
        console.error("Error loading Add Work Page:", error);
        res.status(500).send("Internal Server Error");
    }
});

/**
 * @route   GET /provider/profile
 * @desc    Render Provider Profile Page
 * @access  Private (Requires Authentication)
 */
router.get('/profile', (req, res) => {
    try {
        req.user = { role: 'provider' }; // REMOVE after debugging

        const userRole = req.user ? req.user.role : null;
        const isUser = userRole === 'user';
        const isAdmin = userRole === 'admin';
        const isProvider = userRole === 'provider';

        console.log("DEBUG: Profile Page - User Role:", userRole);

        res.status(200).render('provider/profile_page', {
            title: 'Provider Profile',
            isAdmin,
            isProvider,
            isUser,
            isHeaderPage: true,
            isSidebarPage: true,
        });
    } catch (error) {
        console.error("Error loading Profile Page:", error);
        res.status(500).send("Internal Server Error");
    }
});

/**
 * @route   GET /provider/status
 * @desc    Render Status Page
 * @access  Private (Requires Authentication)
 */
router.get('/status', (req, res) => {
    try {
        req.user = { role: 'provider' }; // REMOVE after debugging

        const userRole = req.user ? req.user.role : null;
        const isUser = userRole === 'user';
        const isAdmin = userRole === 'admin';
        const isProvider = userRole === 'provider';

        console.log("DEBUG: Status Page - User Role:", userRole);

        res.status(200).render('provider/status_page', {
            title: 'Status',
            isAdmin,
            isProvider,
            isUser,
            isHeaderPage: true,
            isSidebarPage: true,
        });
    } catch (error) {
        console.error("Error loading Status Page:", error);
        res.status(500).send("Internal Server Error");
    }
});

/**
 * @route   GET /provider/payment
 * @desc    Render Payment Page
 * @access  Private (Requires Authentication)
 */
router.get('/payment', (req, res) => {
    try {
        req.user = { role: 'provider' }; // REMOVE after debugging

        const userRole = req.user ? req.user.role : null;
        const isUser = userRole === 'user';
        const isAdmin = userRole === 'admin';
        const isProvider = userRole === 'provider';

        console.log("DEBUG: Payment Page - User Role:", userRole);

        res.status(200).render('provider/payment_page', {
            title: 'Payment',
            isAdmin,
            isProvider,
            isUser,
            isHeaderPage: true,
            isSidebarPage: true,
        });
    } catch (error) {
        console.error("Error loading Payment Page:", error);
        res.status(500).send("Internal Server Error");
    }
});

/**
 * @route   GET /provider/inbox
 * @desc    Render Inbox Page
 * @access  Private (Requires Authentication)
 */
router.get('/inbox', (req, res) => {
    try {
        req.user = { role: 'provider' }; // REMOVE after debugging

        const userRole = req.user ? req.user.role : null;
        const isUser = userRole === 'user';
        const isAdmin = userRole === 'admin';
        const isProvider = userRole === 'provider';

        console.log("DEBUG: Inbox Page - User Role:", userRole);

        res.status(200).render('provider/inbox_page', {
            title: 'Inbox',
            isAdmin,
            isProvider,
            isUser,
            isHeaderPage: true,
            isSidebarPage: true,
        });
    } catch (error) {
        console.error("Error loading Inbox Page:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;