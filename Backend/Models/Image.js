const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        default: null,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tweet',
        default: null,
    },
    image: {
        type: String,
        required: true
    },
}, { timestamps: true });

const ImageModel = mongoose.model('image', ImageSchema);

module.exports = ImageModel;