const router = require("express").Router();
const { Users } = require("../../models");

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

router.post("/login", async (req, res) => {
    try {
        const userData = await Users.findOne({
            where: {email: req.body.email}
        });

        if(!userData) {
            res.status(400).json({ message: "Incorrect email or password"});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: "Incorrect email or password"});
            return;
        }

        req.session.save(() => {
            req.session.id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: "Logged in"})
        });

    } catch {
        res.status(400).json(err);
    }
});

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