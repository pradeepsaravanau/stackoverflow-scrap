import { Router } from 'express';
import { reportTagsData } from '../controller/tags.controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';


const tagRouter = Router();

tagRouter.get('/:type', AuthMiddleware.verifyToken, reportTagsData);

export default tagRouter;
