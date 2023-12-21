const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const {
    getUser,
    getJoinedGroups
} = require('../controllers/user');

const userRouter = express.Router();

userRouter.get('/getuser/:id', fetchUser, getUser);
userRouter.get('/get-joined-groups/:id', fetchUser, getJoinedGroups);

module.exports = userRouter;