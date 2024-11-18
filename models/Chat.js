const db = require("../config/db");

const Chat = {
  create: async (groupId, senderId, message) => {
    const query = "INSERT INTO chats (group_id, sender_id, message) VALUES (?, ?, ?)";
    return db.query(query, [groupId, senderId, message]);
  },

  getByGroupId: async (groupId) => {
    const query = "SELECT * FROM chats WHERE group_id = ?";
    return db.query(query, [groupId]);
  },
};

module.exports = Chat;
