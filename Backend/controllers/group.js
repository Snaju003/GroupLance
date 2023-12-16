const GroupModel = require("../models/Group");
const UserModel = require("../models/User");


const createGroup = async (req, res) => {
    try {
        const {
            leader,
            gName,
            gDesc,
            projName,
            goal,
            domains,
            groupType,
            whoCanJoin,
            groupMembers,
        } = req.body;

        if (!leader || !gName || !projName || !goal || !groupType || !whoCanJoin) {
            return res.status(400).json({
                success: false,
                message: 'Please enter required fields'
            });

        }
        if (groupMembers < 2 || groupMembers > 4) {
            return res.status(400).json({
                success: false,
                message: 'Invalid group member'
            });
        }

        //Check is another group exists or not
        const existingGroup = await GroupModel.findOne({ gName: gName });
        if (existingGroup) {
            return res.status(400).json({
                success: false,
                message: 'Another group exists with same name'
            });
        }

        // Create new group
        const data = {
            leader: leader,
            gName: gName,
            projName: projName,
            gDesc: gDesc,
            domains: domains,
            goal: goal,
            gType: groupType,
            whoCanJoin: whoCanJoin,
            gMembers: groupMembers,
        };
        const newGroup = await GroupModel.create(data);
        if (newGroup) {
            return res.status(200).json({
                success: true,
                message: 'New group created',
                newGroup
            });
        }
    } catch (error) {
        res.status(500).json({
            successs: false,
            message: 'Internal server error'
        });
    }
}

const inviteMember = async (req, res) => {
    try {

        const { userMail } = req.body;

        if (userMail == '') {
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid userId',
            });
        }

        const existUser = await UserModel.findOne({ email: userMail });
        if (existUser) {
            return res.status(400).json({
                success: false,
                message: 'No User found with this email Id'
            });
        }



    } catch (error) {
        res.status(500).json({
            successs: false,
            message: 'Internal server error'
        });
    }
}

const editGroupInfo = async (req, res) => {

}


module.exports = { createGroup };