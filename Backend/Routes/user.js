const express = require('express');
const {
    getUser,
    getJoinedGroups,
    getUserAccount,
    ownedGroup
} = require('../controllers/user');
const fetchUser = require('../middleware/fetchuser');

const userRouter = express.Router();

userRouter.get('/getuser/:id', fetchUser, getUser);
userRouter.get('/get-joined-groups', fetchUser, getJoinedGroups);
userRouter.get('/get-user-account', fetchUser, getUserAccount);
userRouter.get('/owned-groups', fetchUser, ownedGroup);

module.exports = userRouter;