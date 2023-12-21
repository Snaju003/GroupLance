const UserModel = require("../models/User");


const getUser = async (req, res) => {

    try {
        const userId = req.params.id;
        const user = await UserModel.findById(userId).select("-password");
        return res.status(200).json({ success: true, message: 'User found', user });
    } catch (error) {
        console.log('Some error occured', error);
        res.status(500).send('Internal server occured');
    }
}



module.exports = { getUser };