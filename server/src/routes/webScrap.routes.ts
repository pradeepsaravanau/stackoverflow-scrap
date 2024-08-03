
import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { WebScrapControllerInstance } from '../controller/webScrap.controller';


const webScrapRouter = Router();



webScrapRouter.get('/stackoverflow', AuthMiddleware.verifyToken, WebScrapControllerInstance.startScrapping);

export default webScrapRouter;