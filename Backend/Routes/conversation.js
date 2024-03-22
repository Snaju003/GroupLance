const { sendMessage, deleteMessage, fetchAllMessages, getAllConversations } = require('../controllers/conversation');

const express = require('express');
const fetchUser = require('../middleware/fetchuser');

const conversationRouter = express.Router();

conversationRouter.post('/send-message', fetchUser, sendMessage);
conversationRouter.delete('/delete-message/:id', fetchUser, deleteMessage);
conversationRouter.get('/get-all-messages/:id', fetchUser, fetchAllMessages);
conversationRouter.get('/get-all-conversations', fetchUser, getAllConversations);


module.exports = conversationRouter;