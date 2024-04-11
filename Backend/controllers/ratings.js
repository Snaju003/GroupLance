const RatingModel = require("../models/Rating");

const createRating = async (req, res) => {
    try {
        const { ratedUser, rating } = req.body;
        const ratedBy = req.user.id; // Assuming you have middleware to get the authenticated user's ID

        const existingRating = await RatingModel.findOne({ ratedBy, ratedUser });

        if (existingRating) {
            return res.status(400).json({ error: 'You have already rated this user' });
        }

        const newRating = await RatingModel.create({ ratedBy, ratedUser, rating });
        // await newRating.save();

        return res.status(201).json(newRating);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

const getRatingsForUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const ratings = await RatingModel.find({ ratedUser: userId }).populate('ratedBy', 'name _id'); // Assuming User model has 'name' field

        return res.status(200).json(ratings);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
};


module.exports = {
    createRating,
    getRatingsForUser,
}