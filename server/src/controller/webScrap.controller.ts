import { Request, Response } from "express";
import { WebScrap } from "../service/webScrap.service";

class WebScrapController {
    async startScrapping(_req: Request, res: Response){
        try{
        const webScrap = new WebScrap();
       const data =  webScrap.getPopularLanguages();
       res.json({
            "message": "scrapping process started"
       });
        } catch(err: any){
            res.status(err?.status || 500).json(err);
        }
    }
}

export const WebScrapControllerInstance = new WebScrapController();