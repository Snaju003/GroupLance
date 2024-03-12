const express = require('express');
const fetchUser = require('../middleware/fetchuser');
const {
    createTweet,
    deleteTweet,
    getAllTweetsBasedOnGroup,
    getPosts,
    ratePost,
    editTweet
} = require('../controllers/tweet');
const upload = require("../database/fileUpload");

const tweetRouter = express.Router();

tweetRouter.post('/create-post', fetchUser, upload.single("file"), createTweet);
tweetRouter.delete('/delete-post', fetchUser, deleteTweet);
tweetRouter.get('/get-posts/:id', fetchUser, getAllTweetsBasedOnGroup);
tweetRouter.get('/get-all-posts', getPosts);
tweetRouter.put('/rate-post/:id', fetchUser, ratePost);
tweetRouter.put('/update-post/:id', fetchUser, editTweet);

module.exports = tweetRouter;