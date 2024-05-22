import {Schema, model} from "mongoose";
import { CartModelType } from "../types.def";

const cartSchema = new Schema<CartModelType>(
  {
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Food",
        },
        count: Number,
        price: Number,
      },
    ],
    cartTotal: Number,
    orderBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);


export const CartModel = model<CartModelType>('Cart', cartSchema)

