const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = {
  connect: () => {
    db.connect((err) => {
      if (err) {
        console.error("Database connection failed:", err);
        process.exit(1);
      }
      console.log("Connected to MySQL Database.");
    });
  },
  query: (query, params) =>
    new Promise((resolve, reject) => {
      db.query(query, params, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    }),
};
