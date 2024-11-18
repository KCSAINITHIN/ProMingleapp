const express = require("express");
const authMiddleware = require("../utils/authMiddleware");
const db = require("../config/db");

const router = express.Router();

// Finalize a meeting location
router.post("/:groupId/finalize", authMiddleware, async (req, res) => {
  const { groupId } = req.params;
  const { meetingDate } = req.body;

  try {
    const query = `
      SELECT location, COUNT(*) AS votes
      FROM votes
      WHERE group_id = ?
      GROUP BY location
      ORDER BY votes DESC
      LIMIT 1`;
    const [results] = await db.query(query, [groupId]);

    if (!results.length) return res.status(400).json({ error: "No votes to finalize." });

    const winningLocation = results[0].location;

    const insertQuery = `
      INSERT INTO meeting_history (group_id, meeting_date, location)
      VALUES (?, ?, ?)`;
    await db.query(insertQuery, [groupId, meetingDate, winningLocation]);

    res.status(200).json({ message: "Meeting finalized successfully.", location: winningLocation });
  } catch (error) {
    res.status(500).json({ error: "Failed to finalize meeting." });
  }
});

module.exports = router;
