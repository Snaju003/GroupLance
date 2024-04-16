require("dotenv").config();
const SubscriptionModel = require("../models/Subscription");
const UserModel = require("../models/User");

const razorWebhook = async (req, res) => {
    const secret = process.env.RAZOR_WEBHOOK_SECRET;
    const crypto = require("crypto");
    const shasum = crypto.createHmac("sha256", secret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");

    if (digest === req.headers['x-razorpay-signature']) {
        console.log('Request is legit');
        const event = req.body?.event;
        console.log('Event:', event);
        if (event === "subscription.completed") {
            // Do here database query
            const payload = req.body?.payload;
            console.dir(payload);
            const existsUser = await UserModel.findOne({ email: payload.payment.entity.email });
            if (existsUser) {
                if (existsUser.subscription) {
                    const updatedSubscription = await SubscriptionModel.findOneAndUpdate({ user: existsUser._id }, {
                        $set: {
                            subscriptionId: payload.subscription.entity.id,
                            planId: payload.subscription.entity.plan_id,
                            start_period: payload.subscription.entity.current_start,
                            end_period: payload.subscription.entity.current_end
                        }
                    }, { new: true });
                } else {
                    const newSubscription = await SubscriptionModel.create({
                        user: existsUser._id,
                        subscriptionId: payload.subscription.entity.id,
                        planId: payload.subscription.entity.plan_id,
                        start_period: payload.subscription.entity.current_start,
                        end_period: payload.subscription.entity.current_end
                    })
                    await UserModel.findByIdAndUpdate(existsUser._id, {
                        $set: {
                            subscription: newSubscription._id
                        }
                    });
                }
                console.log('Subscription done');
            } else {
                throw new Error("Something went wrong");
            }
        }
    }
    else {
        console.log('Fake request');
    }
    res.json({ status: 'ok' });
}

module.exports = {
    razorWebhook
};