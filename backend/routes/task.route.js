const express = require('express');
const Task = require('../models/task.model');
const authenticate = require('../middleware/authentication');
const router = express.Router();

// Create a new task
router.post('/', authenticate, async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const authorId = req.userId;
    const profileImg = req.user.image;
    const task = await Task.create({ title, description, image, authorId, profileImg });
    res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    console.error("Create task error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error("Get tasks error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get task by ID
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    console.error("Get task by ID error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Update task by ID
router.patch('/:id', authenticate, async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const authorId = req.userId;
    const profileImg = req.user.image;
    const task = await Task.findByIdAndUpdate(req.params.id, { title, description, image, authorId, profileImg }, { new: true });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task updated successfully", task });
  } catch (error) {
    console.error("Update task error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Delete task by ID
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Delete task error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
