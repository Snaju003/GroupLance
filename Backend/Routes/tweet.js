const express = require('express');
const fetchUser = require('../middleware/fetchuser');
const { createTweet, deleteTweet, getAllTweets } = require('../controllers/tweet');

const tweetRouter = express.Router();

tweetRouter.post('/create-post', fetchUser, createTweet);
tweetRouter.delete('/delete-post', fetchUser, deleteTweet);
tweetRouter.get('/get-posts/:id', fetchUser, getAllTweets);

module.exports = tweetRouter;