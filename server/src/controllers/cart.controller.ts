import { ErrorMessage, SuccessMessage } from './../utils/helper';
import { CartModel, FoodModel } from "../models";
import { AsyncWrapper, HttpStatusCode } from "../utils";
import { Request, Response } from "express";

export const GetAllCartItems = AsyncWrapper(async (req: Request, res: Response) => {
  const cart = await CartModel.findOne({ orderBy: req.userId }).populate("products.product");
  res.status(HttpStatusCode.OK).json(cart);
});

export const CreateUserCart = AsyncWrapper(async (req: Request, res: Response) => {
  const { productId, count } = req.body;

  const product = await FoodModel.findById(productId);

  if (!product) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({ message: ErrorMessage.PRODUCT_NOT_FOUND });
  }

  const cart = await CartModel.findOne({ orderBy: req.userId });
  if (!cart) {
    let total = 0;
    total = total + product.price * count;
    const newCart = await CartModel.create({
      orderBy: req.userId,
      products: [{ product: productId, count, price: product.price }],
      cartTotal: total,
    });

    return res.status(HttpStatusCode.CREATED).json(newCart);
  }

  const index = cart.products.findIndex((p) => p?.product?.toString() === productId);
  if (index > -1) {
    cart.products[index].count += count;
    cart.cartTotal! += product.price * count;
  } else {
    cart.products.push({
      product: productId,
      count,
      price: product.price,
    });
    cart.cartTotal! += product.price * count;
  }

  await cart.save();
  res.json({ message: SuccessMessage.PRODUCT_ADDED_SUCCESSFULLY });
});

export const RemoveFromCart = AsyncWrapper(async (req: Request, res: Response) => {
  const { productId } = req.params;

  const product = await FoodModel.findById(productId);

  if (!product) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({ message: ErrorMessage.PRODUCT_NOT_FOUND });
  }

  let cart = await CartModel.findOne({ orderBy: req.userId });

  if (!cart) {
    return res.json({ message: ErrorMessage.PRODUCT_NOT_FOUND });
  }
  const index = cart.products.findIndex((p) => p?.product?.toString() === productId);

  if (index !== -1) {
    cart.products.splice(index, 1);
    cart.cartTotal! -= product.price;
    await cart.save();
    res.status(HttpStatusCode.OK).json({ message: SuccessMessage.PRODUCT_DELETED_SUCCESSFULLY });
  }
});

export const UpdateCartItem = AsyncWrapper(async (req: Request, res: Response) => {
  const { productId } = req.params;
  const { count } = req.body;

  const product = await FoodModel.findById(productId);

  if (!product) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({ message: ErrorMessage.PRODUCT_NOT_FOUND });
  }

  if (count <= 0) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({ message: ErrorMessage.PRODUCT_COUNT });
  }

  const cart = await CartModel.findOne({ orderBy: req.userId });

  if (cart) {
    const item = cart.products.find((p) => p?.product?.toString() === productId);

    if (item) {
      const oldPrice = item.price;

      item.count = count;
      item.price! = product.price * count;
      cart.cartTotal! = cart.cartTotal! - oldPrice! + item.price;
      await cart.save();
      res.status(HttpStatusCode.OK).json({ message: SuccessMessage.PRODUCT_UPDATED_SUCCESSFULLY});
    }
  }
});
