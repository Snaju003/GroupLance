const mongoose = require('mongoose');
const MONGODB_URI = "mongodb://127.0.0.1:27017/grouplancer";

const connectdb = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to Database');
    } catch (error) {
        console.log(error);
        process.exit();
    }
}

module.exports = connectdb;
