"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const express_1 = require("express");
const auth = __importStar(require("../controllers/auth.controller"));
const utils_1 = require("../utils");
const middleware_1 = require("../middleware");
exports.AuthRoute = (0, express_1.Router)();
exports.AuthRoute.post("/SignUp", (0, middleware_1.RateLimiterMiddleware)(utils_1.ErrorMessage.RATE_LIMIT_ERROR, 2), (0, middleware_1.ValidationMiddleware)(utils_1.SignupSchema), auth.SignUpUser);
exports.AuthRoute.post("/SignIn", (0, middleware_1.ValidationMiddleware)(utils_1.SigninSchema), auth.SignInUser);
exports.AuthRoute.post("/SignOut", auth.SignOutUser);
exports.AuthRoute.get("/verifyAuth", middleware_1.AuthMiddleware, auth.VerifyUser);
