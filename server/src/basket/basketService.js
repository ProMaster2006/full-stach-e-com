import { BasketModel } from "../models/basket.js";

class BasketService {
    async createBasket(user_id) {

        const doc = new BasketModel({user_id})

        const userBasket = await doc.save();

        const basketId = userBasket._doc._id
        
        return basketId
    }
}

export default new BasketService();