import { model, Schema } from "mongoose";

const categoryModel = model('Category', Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    }
}))

export default categoryModel