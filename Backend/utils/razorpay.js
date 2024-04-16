const Razorpay = require("razorpay");
require("dotenv").config();

const instance = new Razorpay({
    key_id: process.env.RAZOR_PAY_TEST_KEY,
    key_secret: process.env.RAZOR_PAY_SECRET_KEY,
});

module.exports = instance;