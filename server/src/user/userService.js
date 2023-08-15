import  jwt  from 'jsonwebtoken'
import mongoose from 'mongoose';
import { UserModel } from '../models/user.js';
import bcrypt from 'bcrypt'
import basketController from '../basket/basketController.js';
import basketService from '../basket/basketService.js';
import { BasketModel } from '../models/basket.js';

const generateJwt = (email, userId) => {
    return jwt.sign(
        {email, userId},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
        )
}

class UserService {

    async registranion(req) {
        try {
            
        const {password, fullname, email} = req.body;

        const candidate = await UserModel.findOne({fullname}) 

        if(candidate) {
            return { message: 'Даное имя уже занято' }
        }

        const salt = await bcrypt.genSalt(10)
        const passHash = await bcrypt.hash(password, salt)

        const doc = new UserModel({
            ...req.body,
            password: passHash
        })

        const user = await doc.save();
        const userId = user._doc._id

        const BskDoc = await BasketModel({user_id: userId})

        const Bsk = await BskDoc.save()

        const bskId = Bsk._doc._id;


        const token = jwt.sign(
            {email, userId, bskId},
            process.env.SECRET_KEY,
            {expiresIn: '24h'} 
        )

        return token
        } catch (error) {
            console.log(error);
            return { message: 'Не удалось зарегестрировать пользователя' }
        }
    }

    async login(req, res) {
        const email = req.body.email
        const user = await UserModel.findOne({email});
        const userId = user._doc._id;
        const userBasket = await BasketModel.findOne({user_id: userId})
    
        if(!user) {
            return res.status(400).json({
                message: 'Пользователя не найден'
            })
        }

        const isValidPassword = await bcrypt.compare(req.body.password, user._doc.password)

        if(!isValidPassword) {
            return res.status(404).json({
                message: "Неправильна пошта чи пароль"
            })
        }

        const token = jwt.sign(
            {email, userId, bskId: userBasket._id},
            process.env.SECRET_KEY,
            {expiresIn: '24h'}
        )

        return token;
    }

    async check(req, res) {
        const email = req.user.email
        const userId = req.user.userId;
        const bskId = req.user.bskId;

        const token =  jwt.sign(
            {email, userId, bskId},
            process.env.SECRET_KEY,
            {expiresIn: '24h'} 
        )

        return token

    }
}

const userService =  new UserService();

export default userService;