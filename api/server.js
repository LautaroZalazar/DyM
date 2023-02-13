import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import router from "./routes/index.js";
dotenv.config()

const { PORT, MONGO_URI } = process.env

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/", router)


mongoose.set('strictQuery', false)

mongoose.connect(MONGO_URI)
.then(() => {
    console.log("Db up");
})
.catch(err => {
    console.log(`Error in db: ${err}`);
})

const server = app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`);
})

server.on("error", err => {
    console.log(`Error in server initialize: ${err}`);
})