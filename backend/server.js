const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const workoutRoute = require("./api/routes/workoutRoute");
const userRoute = require("./api/routes/userRoute");
const app = express();

//middlewares
app.use(cors());

app.use(express.json());
app.use("/api/workouts", workoutRoute);
app.use("/api/user", userRoute);

function start() {
  try {
    mongoose.connect(process.env.MONGO_URI).then(() => {
      app.listen(process.env.PORT, () => {
        console.log("running on port", process.env.PORT);
      });
    });
  } catch (error) {
    console.log(error);
  }
}

start();
