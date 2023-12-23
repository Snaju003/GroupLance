const UserModel = require("../models/User");


const getUser = async (req, res) => {

    try {
        const userId = req.params.id;
        const user = await UserModel.findById(userId).select("-password");
        return res.status(200).json({ success: true, message: 'User found', user });
    } catch (error) {
        console.log('Some error occured', error);
        res.status(500).json({ message: 'Internal server occured', error });
    }
}

const getJoinedGroups = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId || userId == '') {
            return res.status(400).json({
                success: true,
                message: 'Please provide correct information'
            });
        }
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'No User found'
            });
        }
        const joinedGroups = user.groups;
        return res.status(200).json({
            success: true,
            message: 'Groups fetched',
            joinedGroups
        });
    } catch (error) {
        console.log('Some error occured', error);
        res.status(500).send('Internal server occured');
    }
}

module.exports = {
    getUser,
    getJoinedGroups,
};