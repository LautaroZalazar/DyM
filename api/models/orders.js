import { model, Schema } from "mongoose";

const ordersModel = model('Orders', Schema({
    products: [{
        type: Schema.ObjectId,
        ref: "Product"
    }],
    user: {
        type: Schema.ObjectId,
        ref: "User"
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Completed", "Canceled", "Delivered"],
        default: "Pending"
    },
    withdrawalDay: {
        type: Date,
        required: true
    },
    withdrawalCode: {
        type: String
    }
}))

export default ordersModel