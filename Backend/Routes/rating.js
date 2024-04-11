const express = require('express');
const ratingRouter = express.Router();
const fetchUser = require('../middleware/fetchuser');
const { createRating, getRatingsForUser } = require('../controllers/ratingController');

// Create a new rating
ratingRouter.post('/ratings', fetchUser, createRating);

// Get ratings for a user
ratingRouter.get('/ratings/:userId', fetchUser, getRatingsForUser);

module.exports = ratingRouter;