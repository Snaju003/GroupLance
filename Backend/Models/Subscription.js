const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
        unique: true
    },
    subscriptionId: {
        type: String,
        required: true,
        unique: true
    },
    start_period: {
        type: Number,
        required: true
    },
    end_period: {
        type: Number,
        required: true
    },
    planId: {
        type: String,
        required: true
    }
}, { timestamps: true });

const SubscriptionModel = mongoose.model('subscription', SubscriptionSchema);

module.exports = SubscriptionModel;

