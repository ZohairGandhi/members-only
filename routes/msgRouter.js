const { Router } = require("express");
const db = require("../db/queries");

const router = Router();

router.get("/", (req, res) => res.render("message"));

router.post("/", async (req, res, next) => {
  try {
    const { title, content } = req.body;
    await db.createMessage(req.user.id, title, content, new Date());
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
