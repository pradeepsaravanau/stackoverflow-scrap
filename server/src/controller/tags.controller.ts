import {
    TagsModel,
    QuestionsModel,
    Tags_strict,
    Questions_strict,
  } from "../db/model";

export async function reportTagsData(req: any, res: any){

    try {
        const pipeline = [
          {
            $match: {
              type: req.params.type  === "programmingLanguage" ? 'Programming Language': 'Other'
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
    

        const options = { maxTimeMS: 60000 };
        const result = await TagsModel.aggregate(pipeline).option(options);

        res.json(result);
      } catch (error) {
        console.error('Error aggregating tags:', error);
       res.json(error);
      }

    return 
}


