//connecting everything
const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const jobRoutes = require('./jobRoutes');

router.use('/login', loginRoutes);
router.use('/jobs', jobRoutes);

module.exports = router;