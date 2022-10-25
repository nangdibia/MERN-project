const express = require("express");
const { login, signup } = require("../controllers/userController");
const Router = express.Router();


// signup route
Router.post("/signup", signup);

// login route
Router.post("/login", login);

module.exports = Router;
