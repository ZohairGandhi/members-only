#! usr/bin/env node

require("dotenv").config();
const { Client } = require("pg");

const SQL = `
  DROP TABLE IF EXISTS users CASCADE;
  DROP TYPE IF EXISTS usertype;

  CREATE TYPE usertype AS ENUM('basic', 'member', 'admin');

  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    first_name VARCHAR (25),
    last_name VARCHAR (25),
    username VARCHAR (50),
    password VARCHAR (255),
    user_type USERTYPE DEFAULT 'basic'
  );

  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id INTEGER,
    title VARCHAR (255),
    content VARCHAR (255),
    added TIMESTAMPTZ,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
  );
`;

async function main() {
  console.log("Creating tables...");
  const client = new Client();
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done");
}

main();
