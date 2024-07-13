import {
  TagsModel,
  QuestionsModel,
  Tags_strict,
  Questions_strict,
} from "../db/model";

interface Tag {
  name: string;
  questions: number;
  type: string; // Assuming tag_type is a string representation
}

interface Question {
  tag_id: string; // Using string for MongoDB ObjectId
  title: string;
  votes?: number;
  views?: number;
  answers?: number;
  detail?: any; // Assuming detail is JSONB
}

class WebScrapModel {
  async insertTag(tag: Tag): Promise<Tags_strict | null> {
    try { 
      const newTag = new TagsModel({
        name: tag.name,
        type: tag.type,
        questions: tag.questions,
      });
      const result = await newTag.save();
      return result as unknown as Tags_strict; // Return the saved document
    } catch (error) {
      console.error("Error inserting tag:", error);
      return null;
    }
  }

  async insertQuestions(
    questions: Question[]
  ): Promise<Array<Questions_strict> | null> {
    try {
      const results: Array<Questions_strict> = [];
      for (const question of questions) {
        const newQuestion = new QuestionsModel({
          tagId: question.tag_id,
          title: question.title,
          votes: question.votes || 0,
          views: question.views || 0,
          answers: question.answers || 0,
          detail: question.detail || {},
        });
        const result = (await newQuestion.save()) as any;
        results.push(result);
      }
      console.log("Bulk insert successful.");
      return results;
    } catch (error) {
      console.error("Error inserting questions:", error);
      return null;
    }
  }
}

export const WebScrapModelInstance = new WebScrapModel();
