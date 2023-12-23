const mongoose = require('mongoose');
const { Schema } = mongoose;
const jwt = require('jsonwebtoken');

const WorkExperienceSchema = new Schema({
    companyName: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    startDate: {
        type: Schema.Types.Mixed,
    },
    endDate: {
        type: Schema.Types.Mixed,
    },
}, { timestamps: true });

const EducationSchema = new Schema({
    institutionName: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    startDate: {
        type: Schema.Types.Mixed,
    },
    endDate: {
        type: Schema.Types.Mixed,
    },
}, { timestamps: true });

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
    profile_pic: {
        type: String,
    },
    skills: [{ type: String }],
    workExperience: [{ type: WorkExperienceSchema }],
    education: [{ type: EducationSchema }],
}, { timestamps: true })

// Sign Access Token
UserSchema.methods.SignAccessToken = function () {
    return jwt.sign(
        { id: this._id },
        process.env.ACCESS_TOKEN || '',
        { expiresIn: '5m' }
    );
}

// Sign Refresh Token
UserSchema.methods.SignRefreshToken = function () {
    return jwt.sign(
        { id: this._id },
        process.env.REFRESH_TOKEN || '',
        { expiresIn: '7d' }
    );
}

UserSchema.methods.sayHello = function () {
    console.log(`Hi from ${this.name}`);
}

const UserModel = mongoose.model('user', UserSchema);
UserModel.createIndexes();

module.exports = UserModel;