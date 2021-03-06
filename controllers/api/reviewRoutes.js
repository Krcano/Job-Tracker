//Connect to the router
const router = require("express").Router();

// Connect to the reviews table on the databse
const { Reviews } = require("../../models");

//Connect to the helper function
const withAuth = require("../../utils/auth");

// Take us to the place to create a new review
router.post("/", withAuth, async (req, res) => {
  try {
    // console.log("req.body")
    const newReview = await Reviews.create({
      ...req.body,
      id: req.session.id,
    });
    // console.log(newReview)
    res.status(200).json(newReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Allows the user to delete the review
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const reviewData = await Reviews.destroy({
      where: {
        id: req.params.id,
        users_id: req.session.user_id,
      },
    });

    if (!reviewData) {
      res.status(404).json({ message: "No review found" });
      return;
    }

    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});
