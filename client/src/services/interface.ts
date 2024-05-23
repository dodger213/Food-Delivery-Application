export const base_url = import.meta.env.VITE_BASE_URL;

export interface ProductProps {
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
    starRating: number;
    _id: string;
  }
  
  export type CartProductProps = {
    product: ProductProps;
    count: number;
    price: number;
    _id?: string;
  };
  
  export interface CartItemProps {
    products: CartProductProps[];
    count: number;
    price: number;
    cartTotal: number;
    orderBy: string;
    _id?: string;
  }
  
  export interface MessageProps {
      message: string
  }

  export interface SignInResponse {
    message: string;
    role: string
  }