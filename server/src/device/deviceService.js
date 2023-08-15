import { DeviceModel } from "../models/device.js";

class DeviceService {

    async createDevice(req) {

        const doc = new DeviceModel({...req.body})

        await doc.save();
        
        return { message: 'Товар був успішно добавлений' }
    }

    async getAllDevices(req) {

        let devices

        const typeAll = '64da66c7d535e80254df495f';

        if(req.query.typeId != typeAll) {
           devices = await DeviceModel.find({typeId: req.query.typeId})
        } else {
           devices = await DeviceModel.find()
        }


        return devices
  
    }

    async getDeviceItem(req) {

        const { id } = req.params;

        const deviceItem = await DeviceModel.findOne({_id: id});

        return deviceItem
    }
}

export default new DeviceService();