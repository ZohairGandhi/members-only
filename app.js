require("dotenv").config();
const express = require("express");
const path = require("node:path");
const signUpRouter = require("./routes/signUpRouter");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/sign-up", signUpRouter);

const PORT = 3000;

app.listen(3000, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}`);
});
