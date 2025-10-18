const { Router } = require("express");
const logInRouter = Router();

logInRouter.get("/", (req, res) => res.render("log-in"));

module.exports = logInRouter;
