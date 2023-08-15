import { validationResult } from 'express-validator';
import userService from './userService.js' 

class UserController {
    async regUser(req, res) {

        const error = validationResult(req);

        if(!error.isEmpty()) {
            return res.status(400).json(error.array())
        }
        const result = await userService.registranion(req, res);
        
        res.json(result)
    }

    async loginUser(req, res) {
        
        const result = await userService.login(req,res)

        res.json(result)
    }

    async checkUser(req, res) {
        const result = await userService.check(req, res);

        res.json(result)
    }
} 

export default new UserController();