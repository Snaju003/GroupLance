require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const [premium, deluxe] = [process.env.PREMIUM_PRICE_ID, process.env.DELUXE_PRICE_ID];


const stripeSession = async (planId) => {
    try {
        const session = await stripe.checkout.sessions.create({
            mode: 'subscription',
            payment_method_types: ["card"],
            line_items: [
                {
                    price: planId,
                    quantity: 1
                },
            ],
            success_url: 'http://localhost:3000/userAccount',
            cancel_url: 'http://localhost:3000'
        });
        return session;
    } catch (error) {
        return error;
    }
}

const checkoutSession = async (req, res) => {
    const { plan, customerId } = req.body;
    let planId = null;
    const currentPlan = plan.toLowerCase();
    if (currentPlan === "premium") {
        planId = premium
    } else if (currentPlan === "deluxe") {
        planId = deluxe;
    }

    try {
        const session = await stripeSession(planId);
        console.log(session);
        return res.status(200).json({ session });
    } catch (error) {
        return res.status(500).json({ message: `Something went wrong ${error.message}` });
    }
}

module.exports = {
    checkoutSession
};