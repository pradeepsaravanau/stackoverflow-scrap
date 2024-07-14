import { tagModelInstance } from "../models/tag.model";


export async function reportTagsData(req: any, res: any){

    try {
        const result = await tagModelInstance.generateTagReport(req.params.type);
        res.json(result);
      } catch (error) {
        console.error('Error aggregating tags:', error);
       res.json(error);
      }

}




