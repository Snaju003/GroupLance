import { sendMessage } from '../controllers/conversation';

const express = require('express');
const fetchUser = require('../middleware/fetchuser');

const conversationRouter = express.Router();

conversationRouter.post('/create-conversation', fetchUser, sendMessage);


export default conversationRouter;