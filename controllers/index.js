//Connecting everything in controller folder

// connect to router and express
const router = require("express").Router();

//connect to apiIndex routes
const apiRoutes = require("./api/apiIndex");

//connect to home routes
const homeRoutes = require("./homeRoutes");

//url.com/
router.use("/", homeRoutes);
//url.com/
router.use("/api", apiRoutes);

module.exports = router;
