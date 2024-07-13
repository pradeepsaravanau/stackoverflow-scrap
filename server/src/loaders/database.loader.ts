import { DbService } from "../db/db-server";

export class DatabaseLoader {
  static async init() {
    await DbService.init({
      user: process.env.MONGODB_USERNAME || "admin",
      password: process.env.MONGODB_PASSWORD || "add",
      database: process.env.MONGO_DATABSE || "library-management",
    });
  }
}
