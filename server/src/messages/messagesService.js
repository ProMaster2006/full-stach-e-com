
import { MessageModel } from "../models/message.js";

class MessageService {
    async createMessage(req) {

        const doc = new MessageModel({...req.body});

         await doc.save();

        return { message: 'Ваше сообщения успешно добавлино' }
    }
}

export default new MessageService();