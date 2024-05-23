import { base_url, CartItemProps, MessageProps } from "./interface";




export const GetUserCartItems = async (): Promise<CartItemProps | null> => {
  const response = await fetch(`${base_url}/cart/user-cart`, {
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    return null
  }

  return data;
};


export const AddToCart = async (productId: string) : Promise<MessageProps | Error> => {
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
  
  export const UpdateCartApi = async (productId: string, count: number) : Promise<MessageProps | Error> => {
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
  
  
  export const RemoveFromCartApi = async (productId: string) : Promise<MessageProps | Error> => {
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
  