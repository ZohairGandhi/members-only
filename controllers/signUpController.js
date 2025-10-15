const db = require("../db/queries");
const bcrypt = require("bcrypt");
const { body, validationResult, matchedData } = require("express-validator");

const validateUser = [
  body("firstName")
    .trim()
    .isAlpha()
    .withMessage("First name must only contain letters"),
  body("lastName")
    .trim()
    .isAlpha()
    .withMessage("Last name must only contain letters"),
  body("username")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Username must be at least 8 char long"),
  body("password")
    .trim()
    .isStrongPassword()
    .withMessage(
      "Password must be at least 8 char long and contain at least one lower case char, upper case char, number and symbol",
    ),
  body("confirmPassword")
    .trim()
    .equals(body("password"))
    .withMessage("Passwords do not match"),
];

exports.addUser = [
  validateUser,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors.array());
        return;
      }

      const { firstName, lastName, username, password } = matchedData(req);
      const hashedPassword = await bcrypt.hash(password, 10);
      await db.addUser(firstName, lastName, username, hashedPassword);
      res.redirect("/");
    } catch (err) {
      return next(err);
    }
  },
];
