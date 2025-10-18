const pool = require("./pool");

async function addUser(firstName, lastName, username, password) {
  await pool.query(
    "INSERT INTO users (first_name, last_name, username, password) VALUES ($1, $2, $3, $4)",
    [firstName, lastName, username, password],
  );
}

async function getUserByUsername(username) {
  const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  return rows[0];
}

async function getUserById(id) {
  const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return rows[0];
}

async function createPost(userId, title, content, added) {
  await pool.query(
    "INSERT INTO messages (user_id, title, content, added) VALUES ($1, $2, $3, $4)",
    [userId, title, content, added],
  );
}

module.exports = {
  addUser,
  getUserByUsername,
  getUserById,
  createPost,
};
