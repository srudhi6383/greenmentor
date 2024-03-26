const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.route");

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/user", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the task management app");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
