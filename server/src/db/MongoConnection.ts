import mongoose, { MongooseError } from "mongoose";
import { CustomLogger } from "../utils";


const MONGO_URL = process.env.MONGO_URI as string;

async function MongoConnection() {
  await mongoose
    .connect(MONGO_URL)
    .then((success) => {
      CustomLogger.info(`[Mongo]: Mongo Connected ${success.connection.host}`);
    })
    .catch((error: MongooseError) => {
      CustomLogger.error(`[Mongo]: Mongo connection failed ${error.message}`);
    });
}

export default MongoConnection;
