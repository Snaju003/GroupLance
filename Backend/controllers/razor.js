const UserModel = require("../models/User");
const instance = require("../utils/razorpay");

require("dotenv").config();

const [premium, deluxe] = [process.env.RAZOR_PREMIUM_PRICE_ID, process.env.RAZOR_DELUXE_PRICE_ID];

const newSubscription = async (planId) => {
    try {
        const subscription = await instance.subscriptions.create({
            plan_id: planId,
            total_count: 1,
            quantity: 1,
            customer_notify: 1,
        });
        return subscription;
    } catch (error) {
        return error;
    }
}

const updateSubscription = async (subscriptionId, planId) => {
    try {
        const updatedSubscription = await instance.subscriptions.update(subscriptionId, {
            plan_id: planId,
            quantity: 1,
            customer_notify: 1,
        });
        return updatedSubscription;
    } catch (error) {
        return error;
    }
}

const createSubscription = async (req, res) => {
    try {
        const { plan } = req.body;
        const customerId = req.user;
        let planId = null;
        const currentPlan = plan.toLowerCase();
        if (currentPlan === "premium") {
            planId = premium
        } else if (currentPlan === "deluxe") {
            planId = deluxe;
        }
        let subscription;
        const existsUser = await UserModel.findById(customerId).populate("subscription", "subscriptionId planId");
        if (existsUser.subscription) {
            console.log('Updating subscription');
            subscription = await updateSubscription(existsUser.subscription.subscriptionId, existsUser.subscription.planId);
        } else {
            subscription = await newSubscription(planId);
        }

        console.log('Subscription:', subscription);
        return res.status(200).json({ url: subscription.short_url });
    } catch (error) {
        return res.status(500).json({ message: `Something went wrong` });
    }
}

module.exports = {
    createSubscription
}