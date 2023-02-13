import { model, Schema } from "mongoose";

const productModel = model('Product', Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    image: [{
        type: String,
    }],
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    isDisabled: {
        type: Boolean,
        default: false
    },
    category: {
        type: Schema.ObjectId,
        ref: "Category"
    },
    detail: {
        type: Schema.ObjectId,
        ref: "Detail"
    }
}))

export default productModel