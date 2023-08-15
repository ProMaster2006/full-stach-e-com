import { Router } from "express";
import basketController from "./basketController.js";

const basketRouter = new Router;

basketRouter.post('/create', basketController.create )

export default basketRouter;