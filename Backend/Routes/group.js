
const express = require('express');
const { createGroup, inviteMember, joinGroup, removeMember } = require('../controllers/group');
const fetchUser = require('../middleware/fetchUser');

const groupRouter = express.Router();

groupRouter.post('/create-group', fetchUser, createGroup);
groupRouter.post('/invite-members', fetchUser, inviteMember);
groupRouter.put('/join-group', fetchUser, joinGroup);
groupRouter.delete('/remove-member', fetchUser, removeMember);

module.exports = groupRouter;