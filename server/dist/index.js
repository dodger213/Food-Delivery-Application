"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const MongoConnection_1 = __importDefault(require("./db/MongoConnection"));
const utils_1 = require("./utils");
const port = process.env.PORT || 3001;
(0, MongoConnection_1.default)();
app_1.app.listen(port, () => {
    utils_1.CustomLogger.info(`Server is up and running on ${port}`);
});
