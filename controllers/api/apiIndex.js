//connecting everything in API folder

//connects to the router
const router = require('express').Router();

//connects to the login routes
const loginRoutes = require('./loginRoutes');

//connects to the job routes
const jobRoutes = require('./jobRoutes');

// url.com/users
router.use('/users', loginRoutes);

//url.com/jobs
router.use('/jobs', jobRoutes);

module.exports = router;