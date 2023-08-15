import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import userRouter from './user/UserRouter.js';
import cors from 'cors'
import typeRouter from './type/routerType.js';
import deviceRouter from './device/deviceRouter.js';
import bskDeviceRouter from './basketDevice/bskRouter.js'
import messageRouter from './messages/messagesRouter.js'
import basketRouter from './basket/basketRouter.js';
const app = express()
dotenv.config()

const PORT = process.env.PORT || 5000;
const DB_URL = "mongodb+srv://dbUser:123123as@cluster0.kqlhw.mongodb.net/eCommerc?retryWrites=true&w=majority"

app.use(express.json())
app.use(cors())
app.use('/type', typeRouter)
app.use('/user', userRouter)
app.use('/device', deviceRouter)
app.use('/bskDevice',bskDeviceRouter)
app.use('/message', messageRouter);
app.use('/bsk', basketRouter)

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => {
            console.log('Server started in Port' + PORT);
        })
    } catch (error) {
        console.log(error);
    }
}

startApp()