//connecting everything in API folder

//connects to the router
const router = require('express').Router();

//connects to the login routes
const loginRoutes = require('./loginRoutes');

//connects to the job routes
// const jobRoutes = require('./jobRoutes');

const profileRoutes = require("./profileRoutes");

// url.com/users
router.use('/users', loginRoutes);

//url.com/jobs
// router.use('/jobs', jobRoutes);

router.use("/profile", profileRoutes);

module.exports = router;