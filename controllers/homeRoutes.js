const router = require("express").Router();
const { Users, Jobs, Reviews } = require("../models");
const withAuth = require("../utils/auth");

// GET data and send it to homepage
router.get("/", async (req, res) => {
<<<<<<< HEAD
    try {
        // get a list of the cards to display
        const reviewsData = await Project.findAll({
            include: [
                {
                    model: Jobs,
                    attributes: ["id", "name", "review_text"]
                }
            ]
        })

        const reviews = reviewsData.map((review) => review.get({ plain: true }));

        // Sending data to homepage.handlebars
        res.render("homepage", {
            reviews,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
=======
  try {
    // get a list of the cards to display
    const reviewsData = await Reviews.findAll({
      include: [
        {
          model: Users,
          attributes: ["first_name", "last_name"],
        },
      ],
    });

    const reviews = reviewsData.map((review) => review.get({ plain: true }));
    console.log(reviews);
    // Sending data to homepage.handlebars
    res.render("feed", {
      reviews,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
>>>>>>> 84528fa2e75f6cfe2cb0efd9e8187ebe3079701e
});

// GET data and switch to homepage
router.get("/profile", withAuth, async (req, res) => {
  try {
    // find logged in user
    const userData = await Users.findByPk(req.session.id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Jobs }],
    });

    const user = userData.get({ plain: true });

    // Take usre to profile page
    res.render("profile", {
      ...user,
      // logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If logged in send to dashboard
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
