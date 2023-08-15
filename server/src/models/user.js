import mongoose from 'mongoose';


const User = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        unique: true,
        required: true
    }
}, {
    timestamps: true
})


export const UserModel = mongoose.model('user', User);