const router = require("express").Router();
const { Jobs } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    try {
        const newJob = await Jobs.create({
            ...req.body,
            id: req.sesseion.id
        });

        console.log(newJob);

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
                user_id: req.session.user_id
            }
        });

        if (!jobData) {
            res.status(404).json({ message: "No job found"});
        }

        res.status(200).json(jobData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;