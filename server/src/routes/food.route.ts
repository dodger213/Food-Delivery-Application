import {Router} from 'express'
import * as food from '../controllers/food.controller'
import multer from 'multer'

const storage = multer.memoryStorage()

const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1204
    }
})

export const FoodRoute = Router()

FoodRoute.post('/create-food', upload.single("imageFile"), food.CreateProduct)
FoodRoute.get('/all-foodlist', food.GetAllProducts)
FoodRoute.get('/search/:searchTerm', food.SearchFood)
FoodRoute.get('/recent-food', food.GetRecentlyAdded)
FoodRoute.get('/veg-food', food.GetVegFoods)
FoodRoute.get('/nonveg-food', food.GetNonVegFoods)