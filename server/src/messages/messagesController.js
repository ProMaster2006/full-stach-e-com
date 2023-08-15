import messagesService from "./messagesService.js"

class messagesController {
    async create(req, res) {
        const responce = await messagesService.createMessage(req);

        res.json(responce)
    }
}

export default new messagesController();