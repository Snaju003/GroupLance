const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const { getUser } = require('../controllers/user');

const userRouter = express.Router();

userRouter.get('/getuser/:id', fetchUser, getUser);

module.exports = userRouter;