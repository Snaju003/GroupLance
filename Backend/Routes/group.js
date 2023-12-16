
const express = require('express');
const { createGroup } = require('../controllers/group');
const fetchUser = require('../middleware/fetchUser');

const groupRouter= express.Router();

groupRouter.post('/create-group',fetchUser,createGroup);


module.exports=groupRouter;