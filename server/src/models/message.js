import mongoose from "mongoose";


const Message = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    tel: { type: String, required: true, unique: true },
    text: { type: String, required: true }
})

export const MessageModel = mongoose.model('message', Message);