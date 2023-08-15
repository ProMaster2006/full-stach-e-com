import { Router } from "express";
import bskDeviceController from "./basketDeviceController.js"
import { authMiddlware } from "../middlwares/authMiddlware.js";

const bskDeviceRouter = new Router;

bskDeviceRouter.post('/create', bskDeviceController.create)
bskDeviceRouter.get('/all', authMiddlware , bskDeviceController.getAll)
bskDeviceRouter.post('/remove' , bskDeviceController.remove)

export default bskDeviceRouter;