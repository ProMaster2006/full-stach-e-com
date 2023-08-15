import { Router } from "express";
import { RegisterValidations } from "../validations/auth.js";
import userController from './userController.js'
import { authMiddlware } from "../middlwares/authMiddlware.js";


const router = new Router;


router.post('/registration', RegisterValidations , userController.regUser);
router.post('/login',userController.loginUser);
router.get('/auth', authMiddlware, userController.checkUser)

export default router;