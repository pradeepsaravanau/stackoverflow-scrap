import { Router } from 'express';
import { TagControllerInstance } from '../controller/tag.controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';


const tagRouter = Router();

tagRouter.get('/:type', AuthMiddleware.verifyToken, TagControllerInstance.reportTagsData);

export default tagRouter;
