const InviteModel = require("../models/Invite");
const UserModel = require("../models/User");

const rejectInvite = async (req, res) => {
    try {
        const userId = req.user;
        const groupId = req.params.id;
        if (!userId || !groupId) {
            return res.status(400).json({ message: 'Id needed' });
        }

        const existsUser = await UserModel.findById(userId);
        if (!existsUser) {
            return res.status(400).json({ message: `User not found` });
        }

        await InviteModel.findOneAndDelete({
            invitedUser: userId,
            group: groupId
        });
        return res.status(200).json({
            message: `Rejected invite`
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: `Internal server error`
        });
    }
}

const getAllInvites = async (req, res) => {
    try {
        const userId = req.user;
        if (!userId) {
            return res.status(400).json({ message: 'Id needed' });
        }

        const invites = await InviteModel.find({ invitedUser: userId }).populate("group", "gName gDesc");
        return res.status(200).json({ message: `Fetched all invites`, invites });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: `Internal server error`
        });
    }
}

module.exports = {
    rejectInvite,
    getAllInvites,
}