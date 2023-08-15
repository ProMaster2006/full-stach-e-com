import { Router } from "express";
import deviceController from "./deviceController.js";

const deviceRouter = new Router();

deviceRouter.post('/create', deviceController.create);
deviceRouter.get('/all', deviceController.getAll)
deviceRouter.get('/:id', deviceController.deviceItem)

export default deviceRouter;