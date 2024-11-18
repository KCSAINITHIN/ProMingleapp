const express = require("express");
const Group = require("../models/Group");

const router = express.Router();

// Create Group
router.post("/", async (req, res) => {
  const { groupName } = req.body;

  try {
    await Group.create(groupName);
    res.status(201).json({ message: "Group created successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to create group." });
  }
});

// Get Groups by User
router.get("/:userId", async (req, res) => {
  try {
    const groups = await Group.findByUserId(req.params.userId);
    res.json(groups);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch groups." });
  }
});

module.exports = router;
