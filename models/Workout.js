const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
    }]
});

workoutSchema.methods.totalDuration = function() {
    console.log("HELLO")
    // let duration = this.exercises.reduce((acc,curr)=>{
    //     acc + curr.duration
    // },0)
    // console.log(duration)
    // return duration
  };

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
