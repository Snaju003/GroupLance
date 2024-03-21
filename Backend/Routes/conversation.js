const { sendMessage, deleteMessage, fetchAllMessages } = require('../controllers/conversation');

const express = require('express');
const fetchUser = require('../middleware/fetchuser');

const conversationRouter = express.Router();

conversationRouter.post('/create-conversation', fetchUser, sendMessage);
conversationRouter.delete('/delete-message/:id', fetchUser, deleteMessage);
conversationRouter.get('/get-all-messages/:id', fetchUser, fetchAllMessages);
conversationRouter.get('/get-all-conversations', fetchUser, fetchAllMessages);


module.exports = conversationRouter;