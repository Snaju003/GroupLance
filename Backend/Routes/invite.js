const express = require('express');
const inviteRouter = express.Router();
const fetchUser = require('../middleware/fetchuser');
const { rejectInvite, getAllInvites } = require('../controllers/invite');

inviteRouter.delete('/reject-invite/:id', fetchUser, rejectInvite);
inviteRouter.get('/get-all-invites', fetchUser, getAllInvites);

module.exports = inviteRouter;