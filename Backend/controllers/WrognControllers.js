import ProductsModel from "../models/ProductsModel.js"; // Adjust the path as needed

export const postProducts = async (req, res) => {
  console.log("post api reached");
  const productData = req.body; // Assuming that the product data is sent in the request body

  try {
    const newProduct = new ProductsModel(productData);
    console.log("data to be stored in db : ",newProduct);
    await newProduct.save();
    console.log("Product added successfully:");
    res.json(newProduct); // Sending the newly added product as a response
  } catch (error) {
    console.error("Error adding product:", error);
  }
};
