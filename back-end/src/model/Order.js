import { model, Schema } from 'mongoose';

const orderSchema = new Schema({
    fullName: String,
    address: String,
    phone: String,
    email: String,
    amount: Number,
    clientSecret: String,
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

export default model('Order', orderSchema);
