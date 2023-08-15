import bskDeviceService from "./bskDeviceService.js";


class BskDeviceController {
    async create(req, res) {
        const result = await bskDeviceService.createBskDevice(req)

        res.json(result)
    }
    async getAll(req, res) {
        const result = await bskDeviceService.getAllBskDevice(req)

        res.json(result)
    }

    async remove(req, res) {
        const result = await bskDeviceService.removeAllBskDevice(req)

        res.json(result)
    }
}

export default new BskDeviceController();