import { FoodModel, UserModel } from "../models";
import { AsyncWrapper } from "../utils";
import { Request, Response } from "express";

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
