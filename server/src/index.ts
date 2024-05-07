import {app} from "./app";
import MongoConnection from "./db/MongoConnection";
import { CustomLogger } from "./utils";
import {v2 as cloudinary} from 'cloudinary'

const port = process.env.PORT || 3001


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

MongoConnection()
app.listen(port, () => {
    CustomLogger.info(`Server is up and running on ${port}`)
})