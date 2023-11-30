import axios from "axios";

const url = "http://localhost:5000/adminPanel";

export const AddProduct = async (productData) =>{
    console.log("Api Called : products data = ",productData);
    await axios.post(`${url}/`,productData)
}

export const getProduct = async () => {
    console.log("Api called to view Product");
    return await axios.get(`${url}/`);
}

// Update the deleteProduct API function
export const deleteProduct = async (productId) => {
    console.log("Api called to Delete Product with Product id => ", productId);
    return await axios.delete(`${url}/${productId}`); // Include the product ID in the URL
  };
  