import axios from "axios";

const url = "http://localhost:5000/adminPanel";

export const AddProduct = async (productData) =>{
    console.log("Api Called : products data = ",productData);
    await axios.post(`${url}/`,productData)

}