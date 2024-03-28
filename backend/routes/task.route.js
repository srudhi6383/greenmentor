const express = require('express');

const taskController = require('../controllers/task.controller');

const taskrouter = express.Router();

// create task
taskrouter.post('/', taskController.createTask);

// get all tasks
taskrouter.get('/', taskController.getAllTasks);

// get task by id
taskrouter.get('/:id', taskController.getTaskById);

// update task by id
taskrouter.patch('/:id', taskController.updateTaskById);

// delete task by id
taskrouter.delete('/:id', taskController.deleteTaskById);

module.exports = taskrouter;
