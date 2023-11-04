import { model, Schema } from 'mongoose';

const productSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    amount: Number,
    imageUrl: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});

export default model('Product', productSchema);
