import {
  getModelForClass,
  prop,
  Ref,
  modelOptions,
} from "@typegoose/typegoose";
import { Schema, Types } from "mongoose";

// Define the enum for tag types
enum TagType {
  ProgrammingLanguage = "Programming Language",
  Framework = "Framework",
  Library = "Library",
  Tool = "Tool",
  Database = "Database",
  OperatingSystem = "Operating System",
  Other = "Other",
}

// Define the Tags class
@modelOptions({ schemaOptions: { timestamps: true } })
class Tags {
  _id!: Types.ObjectId;

  @prop({ required: true, unique: true })
  public name!: string;

  @prop({ enum: TagType, default: TagType.Other })
  public type!: TagType;

  @prop({ default: 0 })
  public questions!: number;
}

// Define the Questions class
@modelOptions({ schemaOptions: { timestamps: true } })
class Questions {
  _id!: Types.ObjectId;

  @prop({ required: true })
  tagId!: Types.ObjectId;

  @prop({ required: true })
  title!: string;

  @prop({ default: 0 })
  votes!: number;

  @prop({ default: 0 })
  views!: number;

  @prop({ default: 0 })
  answers!: number;

  @prop({ type: () => Schema.Types.Mixed })
  detail!: Record<string, any>;
}

// Create the models
const TagsModel = getModelForClass(Tags);
const QuestionsModel = getModelForClass(Questions);

export type Tags_strict = Tags & Document;
export type Questions_strict = Questions & Document;

export { TagsModel, QuestionsModel, TagType };
