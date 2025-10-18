const { Router } = require("express");
const db = require("../db/queries");
const router = Router();

router.get("/", async (req, res) => {
  const messages = await db.getMessages();
  res.render("index", { messages });
});

module.exports = router;
