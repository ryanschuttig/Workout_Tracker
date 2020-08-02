const Workout = require("../models/workout");
const router = require("express").Router();

// Gets all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(Workoutsdb => {
            res.json(Workoutsdb);
        })
        .catch(err => {
            res.json(err);
        })
});

// Gets first seven workouts
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(Workoutsdb => {
            res.json(Workoutsdb);
        })
        .catch(err => {
            res.json(err);
        })
});

// Adds new workout
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(Workoutsdb => {
            res.json(Workoutsdb);
        })
        .catch(err => {
            res.json(err);
        })
});

// Update and create new workout
router.put("/api/workouts/:id", (req, res) => {
    console.log("id", req.params.id);
    console.log(req.body);
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
        .then(Workoutsdb => {
            res.json(Workoutsdb);
        })
        .catch(err => {
            res.json(err);
        })
});

module.exports = router;