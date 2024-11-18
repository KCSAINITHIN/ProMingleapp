const express = require("express");
const authMiddleware = require("../utils/authMiddleware");
const db = require("../config/db");

const router = express.Router();

// Submit a vote
router.post("/:groupId", authMiddleware, async (req, res) => {
  const { groupId } = req.params;
  const { location } = req.body;

  try {
    const query = `
      INSERT INTO votes (group_id, user_id, location) 
      VALUES (?, ?, ?) 
      ON DUPLICATE KEY UPDATE location = ?`;
    await db.query(query, [groupId, req.user.id, location, location]);
    res.status(201).json({ message: "Vote submitted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit vote." });
  }
});

// Get voting results
router.get("/:groupId/results", authMiddleware, async (req, res) => {
  const { groupId } = req.params;

  try {
    const query = `
      SELECT location, COUNT(*) AS votes
      FROM votes
      WHERE group_id = ?
      GROUP BY location
      ORDER BY votes DESC
      LIMIT 1`;
    const [results] = await db.query(query, [groupId]);

    res.status(200).json(results.length > 0 ? results[0] : { location: null, votes: 0 });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch voting results." });
  }
});

module.exports = router;
