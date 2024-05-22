import { base_url, ProductProps } from "./interface";

export const SearchApi = async (searchTerm: string): Promise<ProductProps[]> => {
  const response = await fetch(`${base_url}/food/search/${searchTerm}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const GetAllFoodListApi = async (): Promise<ProductProps[]> => {
  const response = await fetch(`${base_url}/food/all-foodlist`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const GetVegFoodApi = async (): Promise<ProductProps[]> => {
  const response = await fetch(`${base_url}/food/veg-food`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const GetNonVegFoodApi = async (): Promise<ProductProps[]> => {
  const response = await fetch(`${base_url}/food/nonveg-food`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const GetRecentlyAddedFoodApi = async (): Promise<ProductProps[]> => {
  const response = await fetch(`${base_url}/food/recent-food`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};
