"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMiddleware = void 0;
const utils_1 = require("../utils");
const zod_1 = require("zod");
const ErrorMiddleware = (error, req, res, next) => {
    var _a;
    const statusCode = (_a = error.statusCode) !== null && _a !== void 0 ? _a : 500;
    if (error instanceof zod_1.ZodError) {
        return res.status(statusCode).json({ message: error.flatten().fieldErrors });
    }
    if (error instanceof utils_1.CustomError) {
        return res.status(statusCode).json({ message: error.message });
    }
    if (error.name === 'jwt expired') {
        return res.status(statusCode).json({ message: error.message });
    }
    console.log(error.message);
    return res.status(statusCode).json({ message: utils_1.ErrorMessage.DEFAULT_ERROR_MESSAGE });
};
exports.ErrorMiddleware = ErrorMiddleware;
