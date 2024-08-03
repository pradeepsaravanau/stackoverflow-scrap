import mongoose, { ConnectOptions, Mongoose } from "mongoose";

interface IDbInit {
  user: string;
  password: string;
  database: string;
}

class DBService {
  private mongooseInstance: Mongoose | null = null;

  async init({ user, password, database }: IDbInit) {
    const uri = `mongodb+srv://${user}:${password}@cluster0.aydyw13.mongodb.net/${database}?retryWrites=true&w=majority`;

    console.log(user, password);
    // const uri = "mongodb://localhost:27017/stack";
    const options: ConnectOptions = {
      minPoolSize: 10,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s if server selection takes too long
    };

    try {
      await mongoose.connect(uri, options);
      this.mongooseInstance = mongoose;
      console.log("Connected to MongoDB using Mongoose");
    } catch (error) {
      console.error("Failed to connect to MongoDB", error);
      throw error;
    }
  }

  getConnection(): Mongoose {
    if (!this.mongooseInstance) {
      throw new Error("Mongoose connection is not initialized.");
    }
    return this.mongooseInstance;
  }

  async closeConnection() {
    if (this.mongooseInstance) {
      await this.mongooseInstance.disconnect();
      this.mongooseInstance = null;
      console.log("Disconnected from MongoDB");
    }
  }
}

export const DbService = new DBService();
