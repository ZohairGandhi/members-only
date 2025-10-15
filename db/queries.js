const pool = require("./pool.js");

async function addUser(firstName, lastName, username, password) {
  await pool.query(
    "INSERT INTO USERS (first_name, last_name, username, password) VALUES ($1, $2, $3, $4)",
    [firstName, lastName, username, password],
  );
}

module.exports = { addUser };
