const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    content: {
        type: Object,
        required: true
    },
}, { timestamps: true });

const NotificationModel = mongoose.model('notify', NotificationSchema);

module.exports = NotificationModel;