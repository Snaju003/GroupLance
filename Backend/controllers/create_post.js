const TweetModel = require("Backend\Models\Tweet.js");

const createTweet = async (req, res) => {
    try {
        const {
            content,
        } = req.body;

        if (!content) {
            return res.status(400).json({
                success: false,
                message: 'No content found.'
            });

        }
        const existingTweet = await TweetModel.find({ content:content });
        if (existingTweet.length > 2) {
            return res.status(400).json({
                success: false,
                message: `Couldn't create another Tweet`
            });
        }
        const newTweet = await TweetModel.create(data);
        if (!newTweet) {
            return res.status(400).json({
                success: false,
                message: 'Failed to create tweet group due to some error occured on DB',
            });
        }
        existingTweet.push(newTweet);
    }
    catch{
        console.log(error);
        res.status(500).json({
            successs: false,
            message: 'Internal server error',
            error
        });
    }
}

module.exports = {
    createTweet
};