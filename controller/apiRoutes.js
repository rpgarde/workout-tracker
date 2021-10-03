const router = require('express').Router();
const db = require('../models');

// GET ALL WORKOUTS
// TODO: Add otalDuration: lastWorkout.totalDuration,
    //   numExercises: lastWorkout.exercises.length,

router.get("/workouts", async (req,res)=>{
    try{
        const workoutData = await db.Workout.find({});
        res.status(200).json(workoutData)
    } catch(err){
        res.status(500).json(err)
    }
})

// ADD EXERCISE BY ID - Working!
router.put("/workouts/:id", async (req,res)=>{
    try{
        console.log(req.body)
        const newExercise = req.body
        console.log('adding new exercise by ID')
        const workoutData = await db.Workout.findByIdAndUpdate(req.params.id,{
                $push:{exercises:req.body}
            },
            {
                runValidators:true,
                new:true
            });
        console.log(workoutData)
        res.status(200).json(workoutData)
    } catch(err){
        res.status(500).json(err)
    }
})

// ADD NEW WORKOUT
router.post("/workouts", async (req,res)=>{
    try{
        const workoutData = await db.Workout.create({});
        console.log(workoutData)
        res.status(200).json(workoutData)
    } catch(err){
        res.status(500).json(err)
    }
})

// GET WORKOUTS IN RANGE - TODO
router.get("/workouts/range", async (req,res)=>{
    try{
        const workoutData = await db.Workout.find().sort({day:-1}).limit(7);
        console.log(workoutData)
        res.status(200).json(workoutData)
    } catch(err){
        res.status(500).json(err)
    }
})
module.exports = router;