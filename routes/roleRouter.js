const { Router } = require("express");
const db = require("../db/queries");
const router = Router();

router.get("/join", (req, res) =>
  res.render("role", {
    title: "Join the Club",
    action: "/join",
    role: "Membership",
  }),
);

router.post("/join", async (req, res) => {
  const { passcode } = req.body;
  if (passcode.trim().toLowerCase() === process.env.MEMBERSHIP_PASS) {
    const id = req.user.id;
    await db.updateUserType(id, "member");
    res.redirect("/");
  } else {
    res.render("join");
  }
});

router.get("/admin", (req, res) =>
  res.render("role", {
    title: "Further Your Control",
    action: "/admin",
    role: "Admin",
  }),
);

router.post("/admin", async (req, res) => {
  const { passcode } = req.body;
  if (passcode.trim().toLowerCase() === process.env.ADMIN_PASS) {
    const id = req.user.id;
    await db.updateUserType(id, "admin");
    res.redirect("/");
  } else {
    res.render("join");
  }
});

module.exports = router;
