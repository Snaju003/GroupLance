const mongoose = require('mongoose');
const { Schema } = mongoose;

const GroupSchema = new Schema({
    leader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    gName: {
        type: String,
        required: true,
        unique: true
    },
    gDesc: {
        type: String,
    },
    projName: {
        type: String,
        required: true,
    },
    goal: {
        type: String,
        required: true,
    },
    domains: [{
        type: String,
    }],
    gMemberNumber: {
        type: Number,
        required: true,
    },
    publicGroup: {
        type: Boolean,
        required: true,
    },
    anyoneCanJoin: {
        type: Boolean,
        required: true,
    },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    pendingRequest: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
}, { timestamps: true });

const GroupModel = mongoose.model('group', GroupSchema);
GroupModel.createIndexes();

module.exports = GroupModel;