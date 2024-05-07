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
exports.GetRecentlyAdded = exports.GetNonVegFoods = exports.GetVegFoods = exports.SearchFood = exports.GetAllProducts = exports.CreateProduct = void 0;
const utils_1 = require("../utils");
const models_1 = require("../models");
const cloudinary_1 = require("cloudinary");
exports.CreateProduct = (0, utils_1.AsyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, category, discount, ingredients, starRating } = req.body;
    const findFood = yield models_1.FoodModel.findOne({ name });
    if (findFood) {
        return res.status(400).json({ message: utils_1.ErrorMessage.FOOD_ALREADY_EXIST });
    }
    const imageUrl = yield uploadImage(req.file);
    const newFood = new models_1.FoodModel({ name, description, price, category, discount, starRating, ingredients, image: imageUrl });
    yield newFood.save();
    res.status(utils_1.HttpStatusCode.OK).json({ message: `${newFood.name} added Successfully` });
}));
exports.GetAllProducts = (0, utils_1.AsyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foods = yield models_1.FoodModel.find({});
    if (foods.length === 0) {
        return res.status(utils_1.HttpStatusCode.OK).json({ message: "Products have not been added yet" });
    }
    return res.status(utils_1.HttpStatusCode.OK).json(foods);
}));
exports.SearchFood = (0, utils_1.AsyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const foodlist = yield models_1.FoodModel.find({ name: { $regex: searchRegex } });
    return res.status(utils_1.HttpStatusCode.OK).json(foodlist);
}));
exports.GetVegFoods = (0, utils_1.AsyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const vegfoods = yield models_1.FoodModel.find({ vegetarian: true }).sort({ createdAt: -1 }).limit(8);
    return res.status(utils_1.HttpStatusCode.OK).json(vegfoods);
}));
exports.GetNonVegFoods = (0, utils_1.AsyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Nonvegfoods = yield models_1.FoodModel.find({ vegetarian: false }).sort({ createdAt: -1 }).limit(8);
    return res.status(utils_1.HttpStatusCode.OK).json(Nonvegfoods);
}));
exports.GetRecentlyAdded = (0, utils_1.AsyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foods = yield models_1.FoodModel.find({}).sort({ createdAt: -1 }).limit(8);
    return res.status(utils_1.HttpStatusCode.OK).json(foods);
}));
const uploadImage = (file) => __awaiter(void 0, void 0, void 0, function* () {
    const image = file;
    const base64Image = Buffer.from(image.buffer).toString("base64");
    const dataUri = `data:${image.mimetype};base64,${base64Image}`;
    const uploadResponse = yield cloudinary_1.v2.uploader.upload(dataUri, { folder: 'foodZone' });
    return uploadResponse.url;
});
