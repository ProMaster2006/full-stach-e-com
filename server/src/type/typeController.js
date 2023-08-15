import typeService from "./typeService.js"

class TypeController {
    async create(req, res) {
        const result = await typeService.createType(req);

        res.json(result)
    }
    
    async getAll(req, res) {
        const result = await typeService.getAllTypes();

        res.json(result)
    }
}

export default new TypeController();