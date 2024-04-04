const express = require("express");
const fetchUser = require("../middleware/fetchuser");
const {
    uploadProfilePic,
    getUserProfilePic,
    uploadPostImage
} = require("../controllers/fileUpload");

const fileRouter = express.Router();

fileRouter.post('/upload-user-pic', fetchUser, uploadProfilePic);
fileRouter.post('/upload-post-img', fetchUser, uploadPostImage);
fileRouter.get('/get-user-pic', fetchUser, getUserProfilePic);

module.exports = fileRouter;