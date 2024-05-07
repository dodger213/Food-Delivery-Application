import { CartModel, FoodModel } from "../models";
import { AsyncWrapper } from "../utils";
import { Request, Response } from "express";

export const GetAllCartItems = AsyncWrapper(async (req: Request, res: Response) => {

  const cart = await CartModel.findOne({ orderBy: req.userId }).populate("products.product");
  
  res.status(200).json(cart)
});

export const CreateUserCart = AsyncWrapper(async (req: Request, res: Response) => {
    
    const { productId, count } = req.body;
    
    const product = await FoodModel.findById(productId);

    if (!product) {
      return res.status(400).json({ message: "Product not found" });
    }

   
     const cart = await CartModel.findOne({ orderBy: req.userId });
     if (!cart) {
       let total = 0
       total = total + product.price * count
       const newCart = await CartModel.create({
         orderBy: req.userId,
         products: [{ product: productId, count, price: product.price }],
         cartTotal: total
       });
 
       return res.status(201).json(newCart);
     }

     
      const index = cart.products.findIndex(
        (p) => p?.product?.toString() === productId
      );
      if (index > -1) {
        
        cart.products[index].count += count;
        cart.cartTotal! += product.price * count
      } else {
        cart.products.push({ 
            product: productId, count, price:product.price });
        cart.cartTotal! += product.price * count
      }
  
      await cart.save();
      res.json({message: 'product added to cart'});

});
