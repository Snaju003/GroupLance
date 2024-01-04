const GroupModel = require('Backend\Models\Group.js');
const { model } = require('mongoose');

const getAllTweets = async (req, res) => {
    try {
        const Tweets = await GroupModel.find({}).select("-tot_tweet");
        return res.status(200).json({
            success: true,
            message: 'All Groups fetched',
            groups
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}
module.exports={
    getAllTweets
}