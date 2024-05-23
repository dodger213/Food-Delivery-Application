import { base_url } from "./interface";



export const GetAllCustomersList = async () => {
  const response = await fetch(`${base_url}/admin/get-users`);

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};



export const GetAllProductList = async () => {
    const response = await fetch(`${base_url}/admin/get-products`);
  
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
  
    return data;
  };


  export const verifyAdminApi = async() => {
    const response = await fetch(`${base_url}/admin/verifyAdminApi`, {
      credentials: "include"
    });
  
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
  
    return data;
  }

  export const EnableDisable = async(id:string) => {
    const response = await fetch(`${base_url}/admin/enable-disable/${id}`, {
      method: 'PUT'
    });
  
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
  
    return data;
  }
  export const Deleteproduct = async(id:string) => {
    const response = await fetch(`${base_url}/admin/delete/${id}`, {
      method: 'Delete'
    });
  
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
  
    return data;
  }


