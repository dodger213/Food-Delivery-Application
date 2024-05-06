"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteNotFoundMiddleware = void 0;
const utils_1 = require("../utils");
const RouteNotFoundMiddleware = (req, res, next) => {
    res.status(utils_1.HttpStatusCode.NOT_FOUND).json({ message: utils_1.ErrorMessage.ROUTE_NOT_FOUND });
};
exports.RouteNotFoundMiddleware = RouteNotFoundMiddleware;
