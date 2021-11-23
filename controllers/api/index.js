//connecting everything
const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const jobRoutes = require('./jobRoutes');

// url.com/users/login
router.use('/users', loginRoutes);
router.use('/jobs', jobRoutes);

module.exports = router;