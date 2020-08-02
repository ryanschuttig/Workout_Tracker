const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "What type of exercise are you doing today?"
            },
            name: {
                type: String,
                trim: true,
                requred: "Exercise Name"
            },
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number,
        }
    ]
});

const Workout = mongoose.model("Workouts", workoutSchema);

module.exports = Workout;