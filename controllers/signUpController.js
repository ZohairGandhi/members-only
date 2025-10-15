const db = require("../db/queries");
const bcrypt = require("bcrypt");

exports.addUser = async (req, res, next) => {
  try {
    const { firstName, lastName, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.addUser(firstName, lastName, username, hashedPassword);
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
};
