import { tagModelInstance } from "../models/tag.model";

class TagController {
   async  reportTagsData(req: any, res: any){
    try {
        const result = await tagModelInstance.generateTagReport(req.params.type);
        res.json(result);
      } catch (error) {
        console.error('Error aggregating tagsas:', error);
       res.json(error);
      }

}
}

export const TagControllerInstance = new TagController();





