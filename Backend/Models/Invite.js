const mongoose = require("mongoose");

const InviteSchema = new mongoose.Schema({
    invitedUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    invitedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'group',
        required: true
    }
}, { timestamps: true });

const InviteModel = mongoose.model('invite', InviteSchema);
module.exports = InviteModel;