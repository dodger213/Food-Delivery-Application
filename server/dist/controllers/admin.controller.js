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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyAdmin = exports.GetAllProductsList = exports.GetAllCustomersList = void 0;
const models_1 = require("../models");
const utils_1 = require("../utils");
exports.GetAllCustomersList = (0, utils_1.AsyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield models_1.UserModel.find();
    return res.status(200).json(users);
}));
exports.GetAllProductsList = (0, utils_1.AsyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield models_1.FoodModel.find();
    return res.status(200).json(products);
}));
exports.VerifyAdmin = (0, utils_1.AsyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send({ userId: req.userId });
}));
