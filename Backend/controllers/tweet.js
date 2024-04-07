const TweetModel = require("../models/Tweet");
const GroupModel = require("../models/Group");
const ImageModel = require("../models/Image");

const createTweet = async (req, res) => {
    try {
        const {
            groupId,
            content,
            file,
        } = req.body;

        const userId = req.user;
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: `User Id needed`
            });
        }
        if (!content) {
            return res.status(400).json({
                success: false,
                message: 'No content found.'
            });
        }

        const existsGroup = await GroupModel.findById(groupId);
        if (!existsGroup) {
            return res.status(400).json({
                success: false,
                message: 'No group found'
            });
        }

        const newTweet = await TweetModel.create({
            userId,
            groupId,
            content,
            file: file,
        });

        const updateGroup = await GroupModel.findByIdAndUpdate(groupId, {
            $push: { tweets: newTweet._id }
        });

        await ImageModel.findByIdAndUpdate(file, {
            $set: {
                post: newTweet._id
            }
        });

        return res.status(200).json({
            success: true,
            message: 'New tweet created!',
            newTweet,
            updateGroup,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            successs: false,
            message: 'Internal server error',
            error
        });
    }
}

const deleteTweet = async (req, res) => {
    try {
        const {
            groupId,
            tweetId
        } = req.body;
        if (!groupId || groupId === '' || !tweetId || tweetId === '') {
            return res.status(400).json({
                success: false,
                message: 'Please provide required fields'
            });
        }
        const existingGroup = await GroupModel.findById(groupId);
        const existingTweet = await TweetModel.findById(tweetId);
        if (!existingTweet || !existingGroup) {
            return res.status(400).json({
                success: false,
                message: 'No such tweet or group exists'
            });
        }
        await TweetModel.findByIdAndDelete(tweetId);
        await GroupModel.findByIdAndUpdate(groupId, { $pull: { tweets: tweetId } });
        return res.status(200).json({
            success: true,
            message: 'Tweet removed from the group successfully'
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

const editTweet = async (req, res) => {
    try {
        const { content } = req.body;
        const tweetId = req.params.id;
        if (!content || !tweetId) {
            return res.status(400).json({
                success: false,
                message: `content or tweetId not provided`
            });
        }

        const existsTweet = await TweetModel.findById(tweetId);
        if (!existsTweet) {
            return res.status(400).json({
                success: false,
                message: `Tweet don't exists`
            });
        }

        const updatedTweet = await TweetModel.findByIdAndUpdate(tweetId, {
            $set: { content: content }
        });

        return res.status(200).json({
            success: true,
            message: `Tweet updated`,
            updatedTweet
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Internal server error`
        });
    }
}

const getAllTweetsBasedOnGroup = async (req, res) => {
    try {
        const groupId = req.params.id;
        if (!groupId) {
            return res.status(400).json({
                success: false,
                message: 'Group id not provided'
            });
        }
        const group = await GroupModel.findById(groupId);
        if (!group) {
            return res.status(400).json({
                success: false,
                message: 'Group not found'
            });
        }
        const tweets = await TweetModel.find({ groupId: groupId })
            .populate({
                path: 'groupId',
                select: 'gName'
            })
            // .populate({ path: 'file', select: 'image' })
            .populate("file")
            .sort({ createdAt: -1 });

        console.log('My Tweets:', tweets);
        return res.status(200).json({
            success: true,
            message: 'All Groups fetched',
            tweets
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

const getPosts = async (req, res) => {
    try {
        const posts = await TweetModel
            .find({})
            .populate({
                path: 'groupId',
                select: 'gName',
            })
            // .populate({ path: 'file', select: 'image' })
            .populate("file")
            .sort({ createdAt: -1 });
        console.log(posts)
        return res.status(200).json({
            success: true,
            message: `All Posts Fetched`,
            posts
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: `Internal server error` });
    }
}

const ratePost = async (req, res) => {
    try {
        const { userId, rate } = req.body;
        const tweetId = req.params.id;
        const existingTweet = await TweetModel.findById(tweetId);
        if (!existingTweet) {
            return res.status(400).json({
                success: false,
                message: `Tweet doesn't exists`
            });
        }
        existingData = existingTweet.rating;
        const updatedData = {
            ratedUser: userId,
            rate: rate
        };

        const updatedTweet = await TweetModel.findByIdAndUpdate(tweetId, {
            $push: { rating: updatedData }
        });

        return res.status(200).json({
            success: true,
            message: `Tweet rated`,
            updatedTweet
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Internal server error`
        });
    }
}

module.exports = {
    createTweet,
    deleteTweet,
    getAllTweetsBasedOnGroup,
    getPosts,
    ratePost,
    editTweet,
};