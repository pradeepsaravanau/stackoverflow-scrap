import { Router } from 'express';
import { reportTagsData } from '../controller/tags.controller';
import { verifyToken } from '../controller/auth.controller';


const tagRouter = Router();

tagRouter.use('/', verifyToken);
tagRouter.get('/:type',  reportTagsData);

export default tagRouter;
