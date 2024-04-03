const express = require("express");
const fetchUser = require("../middleware/fetchuser");
const { 
    uploadProfilePic, 
    getUserProfilePic, 
    uploadPostImage
} = require("../controllers/file-upload");
const fileRouter = express.Router();

fileRouter.post('/upload-user-profile-pic', fetchUser, uploadProfilePic);
fileRouter.post('/upload-post-image',fetchUser,uploadPostImage);
fileRouter.get('/get-user-profile-picture', fetchUser, getUserProfilePic);


module.exports = fileRouter;