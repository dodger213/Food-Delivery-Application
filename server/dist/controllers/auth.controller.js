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
exports.VerifyUser = exports.SignOutUser = exports.SignInUser = exports.SignUpUser = void 0;
const utils_1 = require("../utils");
const models_1 = require("../models");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
exports.SignUpUser = (0, utils_1.AsyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, mobile, firstname, lastname } = req.body;
    const findUser = yield models_1.UserModel.findOne({ email });
    if (findUser) {
        throw new utils_1.CustomError(utils_1.ErrorMessage.USER_ALREADY_EXIST, utils_1.HttpStatusCode.BAD_REQUEST);
    }
    const newUser = new models_1.UserModel({
        email,
        password,
        mobile,
        firstname,
        lastname,
    });
    const user = yield newUser.save();
    if (user) {
        (0, utils_1.GenerateTokenAndCookie)(user._id, res);
        res.status(utils_1.HttpStatusCode.OK).json({ message: utils_1.SuccessMessage.USER_REGISTER_SUCCESS });
    }
}));
exports.SignInUser = (0, utils_1.AsyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const findUser = yield models_1.UserModel.findOne({ email });
    if (!findUser) {
        throw new utils_1.CustomError(utils_1.ErrorMessage.USER_NOT_FOUND, utils_1.HttpStatusCode.BAD_REQUEST);
    }
    const comparePassword = yield bcryptjs_1.default.compare(password, findUser === null || findUser === void 0 ? void 0 : findUser.password);
    if (!comparePassword) {
        throw new utils_1.CustomError(utils_1.ErrorMessage.INVALID_PASSWORD, utils_1.HttpStatusCode.BAD_REQUEST);
    }
    (0, utils_1.GenerateTokenAndCookie)(findUser._id, res);
    res.status(utils_1.HttpStatusCode.OK).json({ message: utils_1.SuccessMessage.USER_LOGIN_SUCCESS });
}));
exports.SignOutUser = (0, utils_1.AsyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.cookie("foodZone", "", {
        expires: new Date(0),
        httpOnly: true,
        secure: false,
        maxAge: 0
    });
}));
exports.VerifyUser = (0, utils_1.AsyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send({ userId: req.userId });
}));
