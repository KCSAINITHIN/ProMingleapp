const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db");

// Importing Routes
const userRoutes = require("./routes/users");
const groupRoutes = require("./routes/groups");
const matchRoutes = require("./routes/matches");
const chatRoutes = require("./routes/chats");
const votingRoutes = require("./routes/voting");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
db.connect();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/matches", matchRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/voting", votingRoutes);

// Server initialization
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
