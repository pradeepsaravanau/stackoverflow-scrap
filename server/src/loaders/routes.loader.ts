import { Application } from "express";
import authRouter from "../routes/auth.routes";
import tagRouter from "../routes/tags.routes";

export class RoutesLoader {
    static init(app: Application,version: string) {
        app.use(`/api/${version}/tags`, tagRouter);
        app.use(`/api/${version}/auth`, authRouter);
    }
}