import { SigninSchema, SignupSchema } from "@/utils/Schema";
import { z } from "zod";
const base_url = import.meta.env.VITE_BASE_URL;

type ReturnType = {
  message: string;
};

export type FoodType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  discount: number;
  createdAt: string;
  ingredients: [];
  image: string;
  vegetarian: boolean;
  available: boolean;
  starRating: number;
};

export const SignupUserApi = async (SignupData: z.infer<typeof SignupSchema>): Promise<ReturnType> => {
  const response = await fetch(`${base_url}/auth/SignUp`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(SignupData),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const SigninUserApi = async (SigninData: z.infer<typeof SigninSchema>): Promise<ReturnType> => {
  const response = await fetch(`${base_url}/auth/SignIn`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(SigninData),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const VerifyUserApi = async () => {
  const response = await fetch(`${base_url}/auth/verifyAuth`, {
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const LogoutUserApi = async (): Promise<ReturnType> => {
  const response = await fetch(`${base_url}/auth/SignOutUser`, {
    method: "POST",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const SearchApi = async (searchTerm: string) : Promise<FoodType[]> => {
  const response = await fetch(`${base_url}/food/search/${searchTerm}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const GetAllFoodListApi = async (): Promise<FoodType[]> => {
  const response = await fetch(`${base_url}/food/all-foodlist`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const GetVegFoodApi = async (): Promise<FoodType[]> => {
  const response = await fetch(`${base_url}/food/veg-food`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const GetNonVegFoodApi = async (): Promise<FoodType[]> => {
  const response = await fetch(`${base_url}/food/nonveg-food`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const GetRecentlyAddedFoodApi = async (): Promise<FoodType[]> => {
  const response = await fetch(`${base_url}/food/recent-food`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};


export const GetUserCartItems = async () => {
  const response = await fetch(`${base_url}/cart/user-cart`, {
    credentials: "include"
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};


export const AddToCart = async (productId: string) : Promise<ReturnType> => {
  const response = await fetch(`${base_url}/cart/add-cart`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({productId, count: 1}),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const UpdateCartApi = async (productId: string, count: number) => {
  const response = await fetch(`${base_url}/cart/update-cart/${productId}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({count}),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
                                                        
  return data;
};


export const RemoveFromCartApi = async (productId: string) => {
  const response = await fetch(`${base_url}/cart/remove-cart/${productId}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    }
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
                                                        
  return data;
};
