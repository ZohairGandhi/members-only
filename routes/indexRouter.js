const { Router } = require("express");
const { formatDistanceToNow } = require("date-fns");
const db = require("../db/queries");
const router = Router();

router.get("/", async (req, res) => {
  const messages = await db.getMessages();

  res.render("index", {
    title: "Members Only",
    messages: messages.map((msg) => {
      const distance = formatDistanceToNow(msg.added);
      return { ...msg, added: distance };
    }),
  });
});

module.exports = router;
