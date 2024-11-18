const db = require("../config/db");

const createMeetingHistoryTable = `
CREATE TABLE IF NOT EXISTS meeting_history (
  id INT AUTO_INCREMENT PRIMARY KEY,
  group_id INT NOT NULL,
  meeting_date DATE NOT NULL,
  location VARCHAR(255) NOT NULL,
  FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE
);
`;

db.query(createMeetingHistoryTable, (err) => {
  if (err) console.error("Failed to create meeting_history table:", err);
});

module.exports = {};
