const router = require("express").Router();
const { Users, Jobs, Reviews } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
    try {
        const reviewsData = await Reviews.findAll({
            include: [
                {
                    model: Users,
                    attributes: ["first_name", "last_name"]
                }
            ]
        })

        const reviews = reviewsData.map((review) => review.get({ plain: true }));

        res.render("feed", {
            reviews,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/profile", async (req, res) => {
    console.log("=============== homeRoute - get/profile ============");
    try {
        const userData = await Users.findByPk(req.session.user_id, {
            attributes: { exclude: ["password"] },
            include: [
                {
                    model: Jobs,
                    where: {
                        users_id: req.session.user_id
                    }
                },
                {
                    model: Reviews,
                    where: {
                        users_id: req.session.user_id
                    }
                }
            ]
        });
        console.log(userData)
        const user = userData.get({ plain: true });

        res.render("profile", {
            user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/login", (req, res) => {
    console.log("============= homeRoute - get/login =============")
    if (req.session.logged_in) {
        res.redirect("/profile");
        return;
    }
    res.render("login");
});

module.exports = router;
