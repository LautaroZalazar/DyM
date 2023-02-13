import { model, Schema } from "mongoose";

const userModel = model('User', Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    }
}))

export default userModel