const express = require('express');
const inviteRouter = express.Router();
const fetchUser = require('../middleware/fetchuser');

inviteRouter.delete('/reject-invite/:id', fetchUser);

module.exports = inviteRouter;