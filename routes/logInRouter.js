const { Router } = require("express");
const router = Router();

router.get("/", (req, res) =>
  res.render("log-in", { title: "Members Only - Log In" }),
);

module.exports = router;
