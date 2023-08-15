import deviceService from './deviceService.js';

class DeviceController {
    async create(req, res) {
        const result = await deviceService.createDevice(req)

        res.json(result)
    }

    async getAll(req, res) {
        const result = await deviceService.getAllDevices(req)
        res.json(result)
    }

    async deviceItem(req, res) {
        const result = await deviceService.getDeviceItem(req)

        res.json(result)
    }
    
}


export default new DeviceController();