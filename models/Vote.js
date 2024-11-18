const db = require("../config/db");

const createVoteTable = `
CREATE TABLE IF NOT EXISTS votes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  group_id INT NOT NULL,
  user_id INT NOT NULL,
  location VARCHAR(255) NOT NULL,
  FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE KEY unique_vote (group_id, user_id)
);
`;

db.query(createVoteTable, (err) => {
  if (err) console.error("Failed to create votes table:", err);
});

module.exports = {};
