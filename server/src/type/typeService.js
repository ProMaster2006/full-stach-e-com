import mongoose from "mongoose";
import { TypeModel } from '../models/type.js'

class TypeService {
    async createType(req) {
        
        const { name } = req.body;

        const doc = await new TypeModel({
            name
        })

        const newType = await doc.save();

        return newType;
    }

    async getAllTypes() {
        const types = await TypeModel.find()

        return types;
    }
}


export default new TypeService();