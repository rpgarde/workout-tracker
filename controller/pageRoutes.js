const router = require('express').Router();

const path = require('path')

router.get("/stats",(req,res)=>{
    try{
        res.sendFile(path.join(__dirname, '../public/stats.html'))
    } catch(err){
        res.status(404).json(err)
    }
})

router.get("/exercise",(req,res)=>{
    try{
        res.sendFile(path.join(__dirname, '../public/exercise.html'))
    } catch(err){
        res.status(404).json(err)
    }
})

module.exports = router;