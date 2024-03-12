const TweetModel = require("../models/Tweet");
const GroupModel = require("../models/Group");

const createTweet = async (req, res) => {
    try {
        const {
            groupId,
            content,
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

        // let imageUrl=null;
        // const url = 'http://localhost:8000';
        // if (!req.file) {
        //     imageUrl = `${url}/file/${req.file.filename}`;
        // }

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
            // file: imageUrl,
        });

        const updateGroup = await GroupModel.findByIdAndUpdate(groupId, {
            $push: { tweets: newTweet._id }
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
        const tweets = await TweetModel.find({ groupId: groupId }).populate({
            path: 'groupId',
            select: 'gName'
        });
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
};