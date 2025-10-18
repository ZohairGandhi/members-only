const { Router } = require("express");
const router = Router();
const controller = require("../controllers/signUpController");

router.get("/", (req, res) => res.render("sign-up"));
router.post("/", controller.addUser);

module.exports = router;
