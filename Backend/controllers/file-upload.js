const express = require("express");
const fetchUser = require("../middleware/fetchuser");
// const upload = require("../database/fileUpload");
const ImageModel = require("../models/Image");
const UserModel = require("../models/User");
const upload = require("../database/fileUpload");
const fileRouter = express.Router();

const uploadFile = async (req, res) => {
    try {

        // const imageData = {
        //     data: req.file.buffer,
        //     contentType: req.file.mimetype
        // };
        const file = req.body;
        console.log('File:', file);
        const userId = req.user;
        const existsImage = await ImageModel.findOne({ user: userId });
        let image;
        if (existsImage) {
            image = await ImageModel.findByIdAndUpdate(existsImage?._id, {
                $set: {
                    image: file.file
                }
            });
        } else {
            image = await ImageModel.create({
                user: userId,
                image: file.file
            });
        }
        const updatedUser = await UserModel.findByIdAndUpdate(userId, {
            $set: {
                profile_pic: image?._id
            }
        });
        // // const imageUrl = `${url}/file/${req.file.filename}`;
        console.log(image);
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

const getFile = async (req, res) => {
    try {
        const userId = req.user;
        const existsImage = await ImageModel.findOne({ user: userId });
        if (!existsImage) {
            return res.status(403).json({ message: `No file uploaded yet` });
        }
        return res.status(200).json({
            message: 'File fetched',
            existsImage
        });

    } catch (error) {
        console.log(`${error.message}`);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

fileRouter.post('/user', fetchUser, uploadFile);
fileRouter.get('/get-user-picture', fetchUser, getFile);


module.exports = fileRouter;