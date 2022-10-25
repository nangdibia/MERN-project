const express = require("express");
const workoutController = require("../controllers/workoutController");
const {requireAuth }= require("../../middlewares/requireAuth");
const Router = express.Router();
// const router = require("./userRoute");


// require authorization for all workouts routes
Router.use(requireAuth);

// all workouts routes
Router.get("/", workoutController.getAllWorkouts);
Router.post("/", workoutController.createWorkout);
Router.get("/:id", workoutController.getSingleWorkouts);
Router.delete("/:id", workoutController.deleteWorkout);
Router.patch("/:id", workoutController.UpdateWorkout);

console.log("all working");
module.exports = Router;
