import { Router } from 'express';
import { jwtSignIn } from '../controller/auth.controller';

const authRouter = Router();

authRouter.get('/signIn', jwtSignIn);

export default authRouter;
