const db = require("../config/db");

const User = {
  create: async (userData) => {
    const query =
      "INSERT INTO users (name, email, password, gender, address, city, interests, hobbies, bio) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    return db.query(query, [
      userData.name,
      userData.email,
      userData.password,
      userData.gender,
      userData.address,
      userData.city,
      userData.interests,
      userData.hobbies,
      userData.bio,
    ]);
  },

  findByEmail: async (email) => {
    const query = "SELECT * FROM users WHERE email = ?";
    const results = await db.query(query, [email]);
    return results[0];
  },
};

module.exports = User;
