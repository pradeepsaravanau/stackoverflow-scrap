import { Application } from "express";
import authRouter from "../routes/auth.routes";
import tagRouter from "../routes/tags.routes";
import webScrapRouter from "../routes/webScrap.routes";

export class RoutesLoader {
    static init(app: Application,version: string) {
        app.use(`/api/${version}/tags`, tagRouter);
        app.use(`/api/${version}/auth`, authRouter);
        app.use(`/api/${version}/scrap`, webScrapRouter);

    }
}