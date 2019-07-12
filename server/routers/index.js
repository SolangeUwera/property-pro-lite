import { Router } from 'express';
import propertiesController from '../controllers/propertiesController.js';
const routes = Router();
routes.get('/', propertiesController.getAll);
routes.get('/:id', propertiesController.getSingle);
routes.post("/api/v1/posts", propertiesController.Add);
routes.put("/api/v1/posts/:id", propertiesController.updatePost);
routes.delete("/api/v1/posts/:id", propertiesController.deletePost);
export default routes;