import mongoose from 'mongoose';

const Type = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    device_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Device',
    }
})

export const TypeModel = mongoose.model('type', Type);