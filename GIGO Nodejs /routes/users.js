var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  // Assuming the user's role is stored in req.user and it's available
  const userRole = req.user ? req.user.role : null; // This should be set based on your authentication middleware

  // Set the flags based on the user's role
  let isUser = userRole === 'user';  // If userRole is 'user', set isUser to true
  let isAdmin = userRole === 'admin';  // If userRole is 'admin', set isAdmin to true
  let isProvider = userRole === 'provider';  // If userRole is 'provider', set isProvider to true

  // Render the home page with appropriate flags
  res.render('user/home_page', {
    title: 'Home',
    isAdmin: isAdmin,
    isProvider: isProvider,
    isUser: isUser,
    isHeaderPage: true
  });
});

/* GET Login page. */
router.get('/login', (req, res) => {
  res.render('user/login', {
    title: 'Login',
    isLoginPage: true,
    isHeaderPage: true
  });
});

module.exports = router;