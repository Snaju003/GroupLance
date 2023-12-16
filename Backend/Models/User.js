const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now
    },
    groups: [{ type: Object }],
}, { timestamps: true })

const UserModel = mongoose.model('user', UserSchema);
UserModel.createIndexes();

module.exports = UserModel;