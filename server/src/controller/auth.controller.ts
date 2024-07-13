

import jwt from "jsonwebtoken";

export async function jwtSignIn(req: any, res: any){
  const secretKey: string = process.env.JWT_SECRET as string;

console.log("req", req);  
const user = {
  username: "pradeepsaravana",
};


const token = jwt.sign(user, secretKey, { expiresIn: '1h' });

console.log('Generated JWT:', token);

res.json({token: token});
}
export async function verifyToken(req: any , res: any) {
  try {
    const secretKey: string = process.env.JWT_SECRET as string;
    const decoded = await jwt.verify(req.headers.token, secretKey);
    console.log('Decoded token:', decoded);
    req.next();
  } catch (err) {
    res.json(err);
  }
}