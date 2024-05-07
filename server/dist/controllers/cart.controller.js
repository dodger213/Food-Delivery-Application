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
exports.CreateUserCart = exports.GetAllCartItems = void 0;
const models_1 = require("../models");
const utils_1 = require("../utils");
exports.GetAllCartItems = (0, utils_1.AsyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cart = yield models_1.CartModel.findOne({ orderBy: req.userId }).populate("products.product");
    res.status(200).json(cart);
}));
exports.CreateUserCart = (0, utils_1.AsyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, count } = req.body;
    const product = yield models_1.FoodModel.findById(productId);
    if (!product) {
        return res.status(400).json({ message: "Product not found" });
    }
    const cart = yield models_1.CartModel.findOne({ orderBy: req.userId });
    if (!cart) {
        let total = 0;
        total = total + product.price * count;
        const newCart = yield models_1.CartModel.create({
            orderBy: req.userId,
            products: [{ product: productId, count, price: product.price }],
            cartTotal: total
        });
        return res.status(201).json(newCart);
    }
    const index = cart.products.findIndex((p) => { var _a; return ((_a = p === null || p === void 0 ? void 0 : p.product) === null || _a === void 0 ? void 0 : _a.toString()) === productId; });
    if (index > -1) {
        cart.products[index].count += count;
        cart.cartTotal += product.price * count;
    }
    else {
        cart.products.push({
            product: productId, count, price: product.price
        });
        cart.cartTotal += product.price * count;
    }
    yield cart.save();
    res.json({ message: 'product added to cart' });
}));
