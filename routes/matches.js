const express = require("express");
const Match = require("../models/Match");
const authMiddleware = require("../utils/authMiddleware");

const router = express.Router();

// Fetch matches for the logged-in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const matches = await Match.getMatchesByUserId(req.user.id);
    res.status(200).json(matches);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch matches." });
  }
});

// Update match status (accept/reject)
router.put("/:matchId", authMiddleware, async (req, res) => {
  const { matchId } = req.params;
  const { status } = req.body;

  if (!["accepted", "rejected"].includes(status)) {
    return res.status(400).json({ error: "Invalid status." });
  }

  try {
    await Match.updateStatus(matchId, status);
    res.status(200).json({ message: "Match status updated." });
  } catch (error) {
    res.status(500).json({ error: "Failed to update match status." });
  }
});

module.exports = router;
