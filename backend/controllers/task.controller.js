const Task = require('../models/Task.model');

// create
const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const { userId } = req;
        const task = new Task({ title, description, userId });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// get
const getAllTasks = async (req, res) => {
    try {
        const { page = 1, limit = 10, sort, order, search } = req.query;
        let query = {};

        // Handle search
        if (search) {
            query = {
                $or: [
                    { title: { $regex: search, $options: 'i' } }, 
                    { description: { $regex: search, $options: 'i' } } 
                ]
            };
        }

        // Handle sorting
        let sortCriteria = {};
        if (sort && (order === 'asc' || order === 'desc')) {
            sortCriteria[sort] = order === 'asc' ? 1 : -1;
        }

        query.userId = req.userId;

        // Pagination
        const tasks = await Task.find(query)
            .sort(sortCriteria)
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// getbyID
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// update
const updateTaskById = async (req, res) => {
    try {
        const { title, description } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, { title, description }, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// delete
const deleteTaskById = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById
};
