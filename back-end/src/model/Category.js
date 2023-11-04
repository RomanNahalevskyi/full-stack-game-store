import { model, Schema } from 'mongoose';

const categorySchema = new Schema({
    title: String,
    description: String,
    imageUrl: String,
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

export default model('Category', categorySchema);
