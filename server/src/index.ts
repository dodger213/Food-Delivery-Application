import {app} from "./app";
import MongoConnection from "./db/MongoConnection";
import { CustomLogger } from "./utils";

const port = process.env.PORT || 3001

MongoConnection()
app.listen(port, () => {
    CustomLogger.info(`Server is up and running on ${port}`)
})