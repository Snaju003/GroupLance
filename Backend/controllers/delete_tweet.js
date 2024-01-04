const TweetModel = require('Backend\Models\Tweet.js');

const deleteTweet=async(res,req)=>{
    try {
        const {
            userId,
        } = req.body;
        if (userId == '') {
            return res.status(400).json({
                success: false,
                message: 'Please provide required fields'
            });
        }
        const existingTweet = await TweetModel.findById({userId});
        if (!existingTweet) {
            return res.status(400).json({
                success: false,
                message: 'No such tweet exists'
            });
        }
        const data={
            tot_tweets:userId.length
        }
        let isContentExistsInTweet = false;
        for (let i = 0; i < existingTweet.userId.length; i++) {
            if (existingTweet.userId.toString() === existingTweet.id) 
                isContentExistsInTweet = true;
        }
            await TweetModel.findByIdAndUpdate(userId, { $inc: { tot_tweets: -1 }, $pull: { userId: userId } });
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
module.exports = {
    deleteTweet
};