const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessageSchema = new Schema({
    senderId:
    {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'user'
    },
    // recieverId:
    // {
    //     type : mongoose.Schema.Types.ObjectId,
    //     require : true,
    //     ref : 'user'
    // },
    conversationId:
    {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'conversation'
    },
    message:
    {
        type: String,
        require: true,
    }
}, { timestamps: true })

const MessageModel = mongoose.model('message', MessageSchema);
MessageModel.createIndexes();

module.exports = MessageModel;