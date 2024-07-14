
import { NextFunction, request, Request, Response } from "express";
import jwt from "jsonwebtoken";


export async function jwtSignIn(_req: any, res: any){
  const secretKey: string = process.env.JWT_SECRET as string;

const user = {
  username: "pradeepsaravana",
};


const token = jwt.sign(user, secretKey, { expiresIn: '1h' });


res.json({token: token});
}


class Auth {
     async verifyToken(req: Request , res: Response, next: NextFunction) {
        try {
          const secretKey: string = process.env.JWT_SECRET as string;
          const decoded = await jwt.verify(req.headers.token as string, secretKey);
          next();
        } catch (err) {
          res.json(err);
        }
      }
}

export const AuthMiddleware = new Auth();