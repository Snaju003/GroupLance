const mongoose = require('mongoose');
const { Schema } = mongoose;

const TweetSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'user',
    },
    groupId:
    {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'group'
    },
    content:
    {
        type: String,
        require: true
    },
    file: {
        type: String,
    },
    rating:
        [
            {
                ratedUser: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
                rate: Number,
            }
        ],
    retweets:
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'group'
            }
        ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'tweet'
        }]
}, { timestamps: true })

const TweetModel = mongoose.model('tweet', TweetSchema)
TweetModel.createIndexes();

module.exports = TweetModel;