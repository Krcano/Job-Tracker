const router = require("express").Router();
const { Users } = require("../../models");

// Homepage AKA /feed
router.post("/feed", async (req, res) => {
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
router.post("/login", async (req, res) => {
    console.log(req.body);

    try {
        const userData = await Users.findOne({
            where: { email: req.body.email }
        });
        console.log(userData);
        if (!userData) {
            res.status(400).json({ message: "Incorrect email or password" });
            return;
        }
        
        //const validPassword = await userData.checkPassword(req.body.password);
        const validPassword = true;
        if (!validPassword) {
            res.status(400).json({ message: "Incorrect email or password" });
            return;
        }

        // part of nodemailer to see if they have been confirmed or verified their email
        if(!userData.confirmed){
            throw new Error('Please confirm your email to login')
        }

        req.session.save(() => {
            req.session.id = userData.id;
            req.session.logged_in = true;

            res.status(200).json({ user: userData, message: "Logged in" })
        });

    } catch (err) {
        res.status(400).json(err);
    }
});


//logout
router.post("/logout", (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});
// FOR NODEMAILER
// not too sure what to put in the string after router.post
router.post('/', (req,res)=>{
    res.render('mailer')
})

module.exports = router;
