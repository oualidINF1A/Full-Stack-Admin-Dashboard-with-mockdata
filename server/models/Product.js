import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    rating:Number,
    supply:Number,
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);
export default Product;