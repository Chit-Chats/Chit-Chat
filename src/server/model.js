const { Pool } = require("pg");
// give access to our dotenv variables through process.env
// this currently has our URI key to access our database
require("dotenv").config();
// Link to ElephantSQL DB
const PG_URI = process.env.DB_KEY;

// Establish connection to DB
const pool = new Pool({
  connectionString: PG_URI,
});

// Query to DB
module.exports = {
  query: (text, params, callback) => {
    console.log("Executed query", text);
    return pool.query(text, params, callback);
  },
};