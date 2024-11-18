const db = require('../config/db');

const Match = {
  create: (data, callback) => {
    const query = `INSERT INTO matches (user1_id, user2_id, status) VALUES (?, ?, 'pending')`;
    db.query(query, [data.user1_id, data.user2_id], callback);
  },

  updateStatus: (id, status, callback) => {
    const query = `UPDATE matches SET status = ? WHERE id = ?`;
    db.query(query, [status, id], callback);
  },

  findMatchesByUserId: (userId, callback) => {
    const query = `
      SELECT * FROM matches 
      WHERE (user1_id = ? OR user2_id = ?) AND status = 'accepted'
    `;
    db.query(query, [userId, userId], callback);
  }
};

module.exports = Match;
