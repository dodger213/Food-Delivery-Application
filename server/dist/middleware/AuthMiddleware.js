"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("../utils");
const AuthMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies['foodZone'];
    if (!token) {
        return res.status(utils_1.HttpStatusCode.UNAUTHORIZED).json({ message: utils_1.ErrorMessage.NOT_AUTHORIZED });
    }
    const decodeToken = yield jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
    if (!decodeToken) {
        return res.status(utils_1.HttpStatusCode.UNAUTHORIZED).json({ message: utils_1.ErrorMessage.NOT_AUTHORIZED });
    }
    req.userId = decodeToken.userId;
    next();
});
exports.AuthMiddleware = AuthMiddleware;
