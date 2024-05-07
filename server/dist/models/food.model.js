"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodModel = void 0;
const mongoose_1 = require("mongoose");
const foodSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    starRating: {
        type: Number,
        default: 1,
        max: 5
    },
    available: {
        type: Boolean,
        default: true
    },
    vegetarian: {
        type: Boolean,
        default: false
    },
    discount: {
        type: Number,
    },
    ingredients: {
        type: [String],
        required: true,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
exports.FoodModel = (0, mongoose_1.model)('Food', foodSchema);
