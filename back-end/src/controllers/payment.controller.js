import dollarsToCents from 'dollars-to-cents';
import Order from '../model/Order.js';
import stripe from 'stripe';
import 'dotenv/config';

const stripeInstance = stripe(process.env.STRIPE_API_SECRET_KEY);

const createPaymentIntent = async (req, res) => {
    try {
        const data = req.body;

        const amount = data.products.reduce((acc, item) => acc + item.price, 0);
        const productsId = data.products.map(({ _id }) => _id);
        const prepareOrder = {
            fullName: data.fullName,
            address: data.address,
            phone: data.phone,
            email: data.email,
            products: productsId,
            amount
        };

        const newOrder = new Order(prepareOrder);
        const saveOrder = await newOrder.save();

        const paymentIntent = await stripeInstance.paymentIntents.create({
            amount: dollarsToCents(data.amount),
            currency: 'usd',
            payment_method_types: ['card']
        });

        return res.status(200).send({
            status: 'OK',
            data: {
                paymentIntent,
                saveOrder
            },
            message: 'Order successfully created'
        });
    } catch (err) {
        return res.status(500).send({
            status: 'ERROR',
            message: 'Order creation failed',
            error: err
        });
    }
};

export default {
    createPaymentIntent
};
