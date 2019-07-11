import express from "express"
import propertyController from '../controllers/propertyController';

const router =  express.Router();


router.get('/properties',propertyController.getproperty);

export default router;