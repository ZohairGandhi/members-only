const { Router } = require("express");
const db = require("../db/queries");
const { isUserAuth } = require("../controllers/authMiddleware");

const router = Router();

router.get("/", isUserAuth, (req, res) =>
  res.render("message", { title: "Members Only - New Message" }),
);

router.post("/", async (req, res, next) => {
  try {
    const { title, content } = req.body;
    await db.createMessage(req.user.id, title, content, new Date());
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await db.deleteMessage(id);
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
