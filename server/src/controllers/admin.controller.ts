import { FoodModel, UserModel } from "../models";
import { AsyncWrapper, ErrorMessage } from "../utils";
import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";

export const GetAllCustomersList = AsyncWrapper(async (req: Request, res: Response) => {
  const users = await UserModel.find();
  return res.status(200).json(users);
});

export const GetAllProductsList = AsyncWrapper(async (req: Request, res: Response) => {
  const products = await FoodModel.find();
  return res.status(200).json(products);
});

export const VerifyAdmin = AsyncWrapper(async (req: Request, res: Response) => {
  res.status(200).send({ userId: req.userId });
});

export const EnableDisableProduct = AsyncWrapper(async (req: Request, res: Response) => {
  const { productId } = req.params;
  const product = await FoodModel.findById(productId);
  if (!product) {
    return res.status(400).json({ message: ErrorMessage.PRODUCT_NOT_FOUND });
  }

  if (product.available === true) {
    await FoodModel.findByIdAndUpdate(productId, {
      available: false,
    });
    return res.status(200).json({ message: "Product disabled" });
  } else {
    await FoodModel.findByIdAndUpdate(productId, {
      available: true,
    });
    return res.status(200).json({ message: "Product enabled" });
  }
});

export const DeleteProduct = AsyncWrapper(async (req: Request, res: Response) => {
  const { productId } = req.params;
  const product = await FoodModel.findById(productId);
  if (!product) {
    return res.status(400).json({ message: ErrorMessage.PRODUCT_NOT_FOUND });
  }

  if (product.image) {
    const imageId = product.image.split("/").pop()?.split(".")[0] as string;
    await cloudinary.uploader.destroy(imageId);
  }

  await FoodModel.findByIdAndDelete(productId);
  return res.status(200).json({ message: "Product deleted" });
});
