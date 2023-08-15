import Router  from "express";
import TypeController from './typeController.js'

const typeRouter = new Router;

typeRouter.post('/create', TypeController.create);
typeRouter.get('/', TypeController.getAll)

export default typeRouter