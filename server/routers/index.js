import { Router } from 'express';
import propertyController from '../controllers/propertyController.js';
const routes = Router();
routes.get('/', propertyController.getAll);
routes.get('/:id', propertyController.getSingle);
export default routes;