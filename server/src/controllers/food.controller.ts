import {Request, Response} from 'express'
import { AsyncWrapper, ErrorMessage, HttpStatusCode } from '../utils'
import { FoodModel } from '../models'
import {v2 as cloudinary} from 'cloudinary'


/*  Create product  */

export const CreateProduct = AsyncWrapper(async(req:Request, res:Response) => {
    const {name, description, price, category, discount, ingredients, starRating} = req.body

    const findFood = await FoodModel.findOne({name})

    if(findFood) {
        return res.status(400).json({message: ErrorMessage.PRODUCT_ALREADY_EXIST})
    }
    const imageUrl = await uploadImage(req.file as Express.Multer.File);

    const newFood = new FoodModel({name, description, price, category, discount, starRating, ingredients, image:imageUrl})

    await newFood.save()
    res.status(HttpStatusCode.OK).json({message: `${newFood.name} added Successfully`})

})

/*  all product list */


export const GetAllProducts = AsyncWrapper(async(req:Request, res:Response) => {
    const foods = await FoodModel.find({})

    if(foods.length === 0) {
        return res.status(HttpStatusCode.OK).json({message: "Products have not been added yet"})
    }

    return res.status(HttpStatusCode.OK).json(foods)
})


/*  search product  */

export const SearchFood = AsyncWrapper(async(req:Request, res:Response) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i')
    const foodlist = await FoodModel.find({name: {$regex: searchRegex}})
    return res.status(HttpStatusCode.OK).json(foodlist)
})

/*  veg food product  */


export const GetVegFoods = AsyncWrapper(async(req:Request, res:Response) => {
    const vegfoods = await FoodModel.find({vegetarian: true}).limit(8)
    return res.status(HttpStatusCode.OK).json(vegfoods)
})

/*  non veg product  */

export const GetNonVegFoods = AsyncWrapper(async(req:Request, res:Response) => {
    const Nonvegfoods = await FoodModel.find({vegetarian: false}).limit(8)
    return res.status(HttpStatusCode.OK).json(Nonvegfoods)
})


/*  recently added  */

export const GetRecentlyAdded = AsyncWrapper(async(req:Request, res:Response) => {
    const foods = await FoodModel.find({}).sort({createdAt: -1}).limit(8)
    return res.status(HttpStatusCode.OK).json(foods)
})


const uploadImage = async(file:Express.Multer.File) => {
    const image = file;
    const base64Image = Buffer.from(image.buffer).toString("base64")
    const dataUri = `data:${image.mimetype};base64,${base64Image}` 

    const uploadResponse = await cloudinary.uploader.upload(dataUri, {folder: 'foodZone'})
    return uploadResponse.url
}


