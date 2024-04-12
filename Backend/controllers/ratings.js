const RatingModel = require("../models/Rating");

const createRating = async (req, res) => {
    try {
        const { ratedUser, rating } = req.body;
        const ratedBy = req.user; // Assuming you have middleware to get the authenticated user's ID

        const existingRating = await RatingModel.findOne({ ratedBy, ratedUser });

        if (existingRating) {
            await RatingModel.findByIdAndUpdate(existingRating._id, {
                $set: {
                    rating: rating
                }
            });
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
        const currentUserId = req.user;
        const ratings = await RatingModel.findOne({ ratedUser: userId, ratedBy: currentUserId });
        if (ratings) {
            return res.status(200).json({ rated: true, rating: ratings.rating });
        } else {
            return res.status(400).json({ rated: false });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
};


module.exports = {
    createRating,
    getRatingsForUser,
}