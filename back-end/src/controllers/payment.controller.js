import dollarsToCents from 'dollars-to-cents';
import stripe from 'stripe';
import 'dotenv/config';

const stripeInstance = stripe(process.env.STRIPE_API_SECRET_KEY);

const createPaymentIntent = async (req, res) => {
    try {
        const data = req.body;

        const paymentIntent = await stripeInstance.paymentIntents.create({
            amount: dollarsToCents(data.amount),
            currency: 'usd',
            payment_method_types: ['card']
        });

        return res.status(200).send(paymentIntent);
    } catch (err) {
        return res.status(500).send(err);
    }
};

export default {
    createPaymentIntent
};
