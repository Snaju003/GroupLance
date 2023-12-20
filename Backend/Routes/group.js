
const express = require('express');
const {
    createGroup,
    inviteMember,
    joinGroup,
    removeMember,
    deleteGroup,
    getAllGroups,
    getGroupInfo,
    editGroupInfo,
} = require('../controllers/group');
const fetchUser = require('../middleware/fetchUser');

const groupRouter = express.Router();

groupRouter.post('/create-group', fetchUser, createGroup);
groupRouter.post('/invite-members', fetchUser, inviteMember);
groupRouter.put('/edit-group-info', fetchUser, editGroupInfo);
groupRouter.put('/join-group', fetchUser, joinGroup);
groupRouter.delete('/remove-member', fetchUser, removeMember);
groupRouter.delete('/delete-group', fetchUser, deleteGroup);
groupRouter.get('/get-all-groups', fetchUser, getAllGroups);
groupRouter.get('/get-group-details/:id', fetchUser, getGroupInfo);

module.exports = groupRouter;