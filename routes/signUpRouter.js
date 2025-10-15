const { Router } = require("express");
const signUpRouter = Router();
const signUpController = require("../controllers/signUpController");

signUpRouter.get("/", (req, res) => res.render("sign-up"));
signUpRouter.post("/", signUpController.addUser);

module.exports = signUpRouter;
