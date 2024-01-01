const mongoose = require('mongoose');
const { Schema } = mongoose;

const ConversationSchema = new Schema({
        userid:
        [ {
            type: mongoose.Schema.Types.ObjectId,
            require : true,
            ref: 'user'
        }],
        lastmessage:
        {
            type : String,
            required : true
        }

},{ timestamps: true })

const ConversationModel = mongoose.model('conversation',ConversationSchema)
ConversationModel.createIndexes();

module.exports = ConversationModel;