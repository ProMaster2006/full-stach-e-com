import mongoose from 'mongoose';

const Basket = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

export const BasketModel = mongoose.model('basket', Basket)