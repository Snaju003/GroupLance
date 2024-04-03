const ImageModel = require("../models/Image");
const UserModel = require("../models/User");

const uploadProfilePic = async (req, res) => {
    try {

        const file = req.body;
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
        return res.status(201).json({
            success: true,
            message: 'file uploaded successfully',
            image
        });

    } catch (error) {
        console.log(`${error.message}`);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

const uploadPostImage = async (req, res) => {
    try {

        const { file, groupId } = req.body;
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
        return res.status(201).json({
            success: true,
            message: 'file uploaded successfully',
            image
        });
    } catch (error) {
        console.log(`${error.message}`);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

const getUserProfilePic = async (req, res) => {
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
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

module.exports = {
    uploadProfilePic,
    getUserProfilePic,
    uploadPostImage
}