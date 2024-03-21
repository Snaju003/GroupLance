const { sendMessage, deleteMessage } = require('../controllers/conversation');

const express = require('express');
const fetchUser = require('../middleware/fetchuser');

const conversationRouter = express.Router();

conversationRouter.post('/create-conversation', fetchUser, sendMessage);
conversationRouter.delete('/delete-message/:id', fetchUser, deleteMessage);


module.exports = conversationRouter;