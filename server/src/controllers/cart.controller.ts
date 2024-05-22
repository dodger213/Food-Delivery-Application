import { CartModel, FoodModel } from "../models";
import { AsyncWrapper } from "../utils";
import { Request, Response } from "express";

export const GetAllCartItems = AsyncWrapper(async (req: Request, res: Response) => {
  const cart = await CartModel.findOne({ orderBy: req.userId }).populate("products.product");

  res.status(200).json(cart);
});

export const CreateUserCart = AsyncWrapper(async (req: Request, res: Response) => {
  const { productId, count } = req.body;

  const product = await FoodModel.findById(productId);

  if (!product) {
    return res.status(400).json({ message: "Product not found" });
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

    return res.status(201).json(newCart);
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
  res.json({ message: "product added to cart" });
});

export const RemoveFromCart = AsyncWrapper(async (req: Request, res: Response) => {
  const { productId } = req.params;

  const product = await FoodModel.findById(productId);

  if (!product) {
    return res.status(400).json({ message: "Product not found" });
  }

  let cart = await CartModel.findOne({ orderBy: req.userId });

  if (!cart) {
    return res.json({ message: "product not found" });
  }
  const index = cart.products.findIndex((p) => p?.product?.toString() === productId);

  if (index !== -1) {
    cart.products.splice(index, 1);
    cart.cartTotal! -= product.price;
    await cart.save();
    res.status(200).json({ message: "Item removed from cart" });
  }
});

export const UpdateCartItem = AsyncWrapper(async (req: Request, res: Response) => {
  const { productId } = req.params;
  const { count } = req.body;

  const product = await FoodModel.findById(productId);

  if (!product) {
    return res.status(400).json({ message: "Product not found" });
  }

  if (count <= 0) {
    return res.status(400).json({ message: "Count must be greater than zero" });
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
      res.status(200).json({ message: "Cart updated", item });
    }
  }
});
