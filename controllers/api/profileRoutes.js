const router = require("express").Router();
const { Users, Jobs, Reviews } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/createjob", async (req, res) => {
  console.log("=============== profileRoutes - post/createjob ============");
  console.log(req.body);
  // Test this
  try {
    const newJob = await Jobs.create({
      ...req.body,
      users_id: req.session.user_id,
    });

    res.status(200).json(newJob);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const jobData = await Jobs.destroy({
      where: {
        id: req.params.id,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/createreview", async (req, res) => {
  console.log("=============== profileRoutes - post/createreview ============");
  console.log(req.body);
  // Test this
  try {
    const newJob = await Reviews.create({
      ...req.body,
      users_id: req.session.user_id,
    });

    res.status(200).json(newJob);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const jobData = await Jobs.destroy({
      where: {
        id: req.params.id,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
