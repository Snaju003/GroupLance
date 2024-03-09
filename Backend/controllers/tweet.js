const TweetModel = require("../models/Tweet");
const GroupModel = require("../models/Group");

const createTweet = async (req, res) => {
    try {
        const {
            groupId,
            content,
        } = req.body;

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
            newTweet
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

const deleteTweet = async (res, req) => {
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
        const existingGroup = await GroupModel.findById({ groupId });
        const existingTweet = await TweetModel.findById({ tweetId });
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

const getAllTweets = async (req, res) => {
    try {
        const groupId = req.params.id;
        if (groupId) {
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
        const tweets = await TweetModel.find({ groupId: groupId });
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

module.exports = {
    createTweet,
    deleteTweet,
    getAllTweets
};