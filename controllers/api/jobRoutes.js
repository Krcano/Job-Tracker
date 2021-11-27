//connects to the router
const router = require("express").Router();

//connects to the jobs table in the databse
const { Jobs } = require("../../models");

//connects with our helper function
const withAuth = require("../../utils/auth");

// // Takes us to the place to create a new job card
// router.post("/", withAuth, async (req, res) => {
//   try {
//     const newJob = await Jobs.create({
//       ...req.body,
//     //   status: req.body.status,
//       id: req.session.id,
//     });

//     console.log(newJob.status);

//     res.status(200).json(newJob);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // Allows us to delete the job card
// router.delete("/:id", withAuth, async (req, res) => {
//   try {
//     const jobData = await Jobs.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!jobData) {
//       res.status(404).json({ message: "No job found" });
//     }

//     res.status(200).json(jobData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
