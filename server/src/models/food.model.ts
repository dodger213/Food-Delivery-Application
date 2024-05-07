import {model, Schema} from 'mongoose'
import { FoodModelType } from '../types.def'


const foodSchema = new Schema<FoodModelType>({
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
})

export const FoodModel = model('Food', foodSchema)