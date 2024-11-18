const db = require("../config/db");

const Group = {
  create: async (groupName) => {
    const query = "INSERT INTO groups (group_name) VALUES (?)";
    return db.query(query, [groupName]);
  },

  findByUserId: async (userId) => {
    const query = `
      SELECT g.* FROM groups g 
      INNER JOIN matches m ON g.id = m.group_id 
      WHERE m.user_id = ?`;
    return db.query(query, [userId]);
  },
};

module.exports = Group;
