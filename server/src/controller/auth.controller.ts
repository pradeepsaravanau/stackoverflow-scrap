import { Request, Response } from "express";
import jwt from "jsonwebtoken";
class AuthController {
  async jwtSignIn(_req: Request, res: Response) {
    const secretKey: string = process.env.JWT_SECRET as string;

    const user = {
      username: "pradeepsaravana",
    };

    const token = jwt.sign(user, secretKey, { expiresIn: "1h" });
    res.json({ token: token });
  }
}

export const AuthControllerInstance = new AuthController();
