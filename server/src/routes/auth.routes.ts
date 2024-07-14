import { Router } from 'express';
import {AuthControllerInstance} from '../controller/auth.controller';

const authRouter = Router();

authRouter.get('/signIn', AuthControllerInstance.jwtSignIn);

export default authRouter;
