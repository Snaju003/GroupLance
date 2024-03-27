const express = require("express");
const fetchUser = require("../middleware/fetchuser");
const upload = require("../database/fileUpload");
const ImageModel = require("../models/Image");
const UserModel = require("../models/User");
const fileRouter = express.Router();

const uploadFile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(404).json({
                success: false,
                message: 'file not found'
            });
        }
        const imageData = {
            data: req.file.buffer,
            contentType: req.file.mimetype
        };
        const userId = req.user;
        const existsImage = await ImageModel.findOne({ user: userId });
        let image;
        if (existsImage) {
            image = await ImageModel.findById(existsImage?._id, {
                $set: {
                    image: imageData
                }
            });
        } else {
            image = await ImageModel.create({
                user: userId,
                image: imageData
            });
        }
        const updatedUser = await UserModel.findById(userId, {
            $set: {
                profile_pic: image?._id
            }
        });
        // const imageUrl = `${url}/file/${req.file.filename}`;

        return res.status(201).json({
            success: true,
            message: 'file uploaded successfully',
            image
        });

    } catch (error) {
        console.log(`${error.message}`);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}


fileRouter.post('/user', fetchUser, upload.single('image'), uploadFile);


module.exports = fileRouter;