import mongoose from "mongoose";

const Device = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    price: {
        type: Number
    },
    img: {
        type: String
    },
    typeId: {
        type: String
    }
})


export const DeviceModel = mongoose.model('device', Device);