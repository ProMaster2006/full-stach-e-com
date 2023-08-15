import { BasketDeviceModel } from "../models/basketDevice.js";
import { BasketModel } from "../models/basket.js";

class BskDeviceService {
    async createBskDevice(req) {
        
        const doc = new BasketDeviceModel({...req.body})

        const BskDevice = await doc.save();

        return BskDevice
    }

    async removeAllBskDevice(req) {

    await BasketDeviceModel.find({basket_id: req.query.bskId})
    
    }

    async getAllBskDevice(req) {

        const user_id = req.user.userId

        const userBasket = await BasketModel.findOne({user_id: user_id})

        const basket_id = userBasket._id;

        const basketItems = await BasketDeviceModel.find({basket_id: basket_id})

        return basketItems
    }
}

export default new BskDeviceService();