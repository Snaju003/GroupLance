const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    ratedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    ratedUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    }
}, { timestamps: true });

// Ensure that a user can rate another user only once
// ratingSchema.index({ ratedBy: 1, ratedUser: 1 }, { unique: true });

const RatingModel = mongoose.model('Rating', ratingSchema);

module.exports = RatingModel;
