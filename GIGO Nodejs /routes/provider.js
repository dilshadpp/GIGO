const express = require('express');
const router = express.Router();

/**
 * @route   GET /provider
 * @desc    Render Provider Home Page
 * @access  Private (Requires Authentication)
 */
router.get('/', (req, res) => {
    try {
        // TEMPORARY FIX: Manually setting user for debugging
        req.user = { role: 'provider' }; // REMOVE this after debugging

        const userRole = req.user ? req.user.role : null;
        const isUser = userRole === 'user';
        const isAdmin = userRole === 'admin';
        const isProvider = userRole === 'provider';

        console.log("DEBUG: Full req.user ->", req.user);
        console.log("DEBUG: User Role ->", userRole);
        console.log("DEBUG: isProvider ->", isProvider);

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
module.exports = router;