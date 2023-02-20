import { model, Schema } from "mongoose";

const detailModel = model('Detail', Schema({
    stock: {
        type: Number,
        default: 0
    },
    size: {
        type: String,
        required: [true, "Size is required"]
    },
    color: {
        type: String,
        required: [true, "Color is required"]
    },
    description: {
        type: String
    }
}))

export default detailModel