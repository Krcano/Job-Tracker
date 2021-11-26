//connects to the router
const router = require("express").Router();

//connects to the Users table in the databse
const { Users } = require("../../models");

// sign up and go to profile page....
router.post("/", async (req, res) => {
    try {
        const userData = await Users.create(req.body);

        req.session.save(() => {
            req.session.id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch {
        res.status(400).json(err);
    }
});

//login page
//url.com/login
router.post("/login", async (req, res) => {
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

        // part of nodemailer to see if they have been confirmed or verified their email
        // if(!userData.confirmed){
        //     throw new Error('Please confirm your email to login')
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
