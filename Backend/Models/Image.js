const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
    image: {
        data: Buffer,
        contentType: String,
    }
}, { timestamps: true });

const ImageModel = mongoose.model('image', ImageSchema);

module.exports = ImageModel;