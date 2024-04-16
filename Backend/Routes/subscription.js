const express = require("express");
const fetchUser = require('../middleware/fetchuser');
const { checkoutSession } = require("../controllers/stripe");
const { createSubscription } = require("../controllers/razor");

const subscriptionRouter = express.Router();

// subscriptionRouter.post('/checkout-session', fetchUser, checkoutSession);
subscriptionRouter.post('/get-subscription', fetchUser, createSubscription);

module.exports = subscriptionRouter;