//connects to the router
const router = require("express").Router();
const nodemailer = require('nodemailer');

//connects to the Users table in the databse
const { Users } = require("../../models");

// sign up and go to profile page....
router.post("/", async (req, res) => {
    console.log("================ loginRoutes - post/ =================")
    try {
        console.log(req.body)
        const userData = await Users.create(req.body);
        
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "atlasjobtracker@gmail.com",
                pass: "p@ssw0rd321"
            }
        });

        const mailOptions = {
            from: "atlasjobtracker@gmail.com",
            to: req.body.email,
            subject: "Sign Up Confirmation",
            text: "Welcome! Thank you for signing up."
        };

        transporter.sendMail(mailOptions, function(error, info) {

            if (error) {
                console.log(error);
            } else {
                console.log("Email SENT: " + info.response);
            }
        });
        console.log(userData);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({ user: userData, message: "Account created" });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

//login page
//url.com/login
router.post("/login", async (req, res) => {
    console.log("=============== loginRoute - post/login ===================");
    try {
        const userData = await Users.findOne({
            where: { email: req.body.email }
        });
        
        if (!userData) {
            res.status(400).json({ message: "Incorrect email or password" });
            return;
        }

        // const user = userData.get({ plain: true });

        //const validPassword = await userData.checkPassword(req.body.password);
        const validPassword = true;
        if (!validPassword) {
            res.status(400).json({ message: "Incorrect email or password" });
            return;
        }
        console.log(userData)
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({ user: userData, message: "Logged in" });
        });

    //const validPassword = await userData.checkPassword(req.body.password);
    // const validPassword = true;
    // if (!validPassword) {
    //   res.status(400).json({ message: "Incorrect email or password" });
    //   return;
    // }

    console.log("=============== loginRoute - post/login ===================");
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: "Logged in" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//logout option
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
