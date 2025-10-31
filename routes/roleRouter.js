const { Router } = require("express");
const db = require("../db/queries");
const router = Router();

router.get("/membership", (req, res) =>
  res.render("membership", {
    title: "Members Only - Join the Club",
  }),
);

router.post("/membership", async (req, res) => {
  const { passcode } = req.body;
  if (passcode.trim().toLowerCase() === process.env.MEMBERSHIP_PASS) {
    const id = req.user.id;
    await db.updateUserType(id, "member");
    res.redirect("/");
  } else {
    res.render("membership");
  }
});

router.get("/admin", (req, res) =>
  res.render("admin", {
    title: "Members Only - Become an Admin",
  }),
);

router.post("/admin", async (req, res) => {
  const { passcode } = req.body;
  if (passcode.trim().toLowerCase() === process.env.ADMIN_PASS) {
    const id = req.user.id;
    await db.updateUserType(id, "admin");
    res.redirect("/");
  } else {
    res.render("admin");
  }
});

module.exports = router;
