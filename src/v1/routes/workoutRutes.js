const router = require("./routes/route");

const express = requiere('express');
const routes= express.Routes;
const workoutController= require("../../Controllers/workoutController");
router 
    .get("/",workoutController.getAllWorkouts)
    .get("/:workout",workoutController.getAllWorkout)
    .post("/",workoutController.CreateNewWorkout)
    .patch("/workoutid",workoutController.UptadeOneWorkout)
    .delete("/:workoutid",workoutController.DeleteOneWorkout)

    module.exports  = routes;