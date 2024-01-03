const mongoose = require('mongoose');
const { Schema } = mongoose;

const TweetSchema = new Schema({
    userId:
    {
        type: mongoose.Schema.Types.ObjectId,
        require : true,
        ref: 'group'
    },
    content:
    {
        type:String,
        require:true
    },
    likes:
    [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'group'
        }
    ],
    retweets:
    [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'group'
        }
    ],
    comments:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'tweet'
    }]
},{ timestamps: true })

const TweetModel = mongoose.model('tweet',TweetSchema)
TweetModel.createIndexes();

module.exports = TweetModel;