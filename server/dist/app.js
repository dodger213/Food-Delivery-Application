"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
require("dotenv/config");
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = require("./routes");
const middleware_1 = require("./middleware");
exports.app = (0, express_1.default)();
exports.app.use((0, morgan_1.default)('dev'));
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)({
    origin: process.env.ORIGIN || 'http://localhost:5173',
    credentials: true,
}));
exports.app.use((0, cookie_parser_1.default)());
exports.app.use((0, helmet_1.default)());
exports.app.use((0, express_mongo_sanitize_1.default)());
exports.app.disable('x-powered-by');
exports.app.use('/api/auth', routes_1.AuthRoute);
exports.app.use('/api/food', routes_1.FoodRoute);
exports.app.use('/api/cart', routes_1.CartRoute);
exports.app.use(middleware_1.RouteNotFoundMiddleware);
exports.app.use(middleware_1.ErrorMiddleware);
