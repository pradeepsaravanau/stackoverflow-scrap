import {
    TagsModel,
    QuestionsModel,
    Tags_strict,
    Questions_strict,
  } from "../db/model";
class tagModel {
    async generateTagReport(type: string){
        const pipeline = [
            {
              $match: {
                type: type  === "programmingLanguage" ? 'Programming Language': 'Other'
              }
            },
            {
              $lookup: {
                from: 'questions',
                localField: '_id',
                foreignField: 'tagId',
                as: 'questionsdata'
              }
            },
            {
              $unwind: {
                path: '$questionsdata'
              }
            },
            {
              $group: {
                _id: '$name',
                questions: { $sum: 1 },
                totalViews: { $sum: '$questionsdata.views' },
                totalVotes: { $sum: '$questionsdata.votes' },
                averageViews: { $avg: '$questionsdata.views' }
              }
            }
          ];
      
          // TagsModel.f
  
         return await TagsModel.aggregate(pipeline);
          
    }
}

export const tagModelInstance = new tagModel();
