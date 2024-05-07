import { z } from "zod";

const EnvVariables = z.object({
  PORT: z.string().min(1).max(4),
  MONGO_URI: z.string().min(1),
  SECRET_KEY: z.string().min(10).max(20),
  ORIGIN: z.string().min(1),
  CLOUDINARY_CLOUD_NAME: z.string().min(1),
  CLOUDINARY_API_KEY: z.string().min(1),
  CLOUDINARY_API_SECRET: z.string().min(1),
});

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

declare global {
  namespace NodeJS {
    export interface ProcessEnv extends z.infer<typeof EnvVariables> {}
  }
}

export type UserModelType = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  mobile: string;
  role: string;
};

export type FoodModelType = {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
  vegetarian: boolean;
  ingredients: [];
  discount: number;
  createdAt: Date;
  starRating: number
};
