const express = require('express');

const authController = require('../controllers/user.controller');

const authRouter = express.Router();

// signup
authRouter.post('/register', authController.register);

// login
authRouter.post('/login', authController.login);

module.exports = authRouter;
