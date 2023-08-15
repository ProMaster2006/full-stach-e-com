import mongoose from "mongoose";


const BasketDevice = new mongoose.Schema({
    device_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Device',
        required: true
    },
    basket_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Basket',
        required: true
    },
    size: {
        type: String,
        required: true
    }
    ,
    color: {
        type: String,
        required: true
    },
    count: {
        type: String,
        required: true,
        default: 1
    },
    img: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

export const BasketDeviceModel = mongoose.model('basketDevice', BasketDevice)