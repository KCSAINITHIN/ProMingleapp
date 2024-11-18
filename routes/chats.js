const express = require("express");
const Chat = require("../models/Chat");
const authMiddleware = require("../utils/authMiddleware");

const router = express.Router();

// Fetch all messages by group
router.get("/:groupId", authMiddleware, async (req, res) => {
  const { groupId } = req.params;

  try {
    const messages = await Chat.getByGroupId(groupId);
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages." });
  }
});

// Send a message to a group
router.post("/:groupId", authMiddleware, async (req, res) => {
  const { groupId } = req.params;
  const { message } = req.body;
  const senderId = req.user.id;

  try {
    await Chat.create(groupId, senderId, message);
    res.status(201).json({ message: "Message sent." });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message." });
  }
});

module.exports = router;
