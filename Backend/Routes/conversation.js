const { sendMessage } = require('../controllers/conversation');

const express = require('express');
const fetchUser = require('../middleware/fetchuser');

const conversationRouter = express.Router();

conversationRouter.post('/create-conversation', fetchUser, sendMessage);


module.exports = conversationRouter;