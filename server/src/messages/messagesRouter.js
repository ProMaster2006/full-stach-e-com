import { Router } from 'express';
import messagesController from "./messagesController.js";

const router = new Router();

router.post('/create', messagesController.create)

export default router;