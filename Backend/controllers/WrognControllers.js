// Importing the ProductsModel from the specified path
import ProductsModel from "../models/ProductsModel.js"; // Adjust the path as needed

// Controller function to handle the addition of new products
export const postProducts = async (req, res) => {
  console.log("post api reached");
  const productData = req.body; // Extracting product data from the request body

  try {
    // Creating a new instance of ProductsModel with the received product data
    const newProduct = new ProductsModel(productData);
    console.log("data to be stored in db : ", newProduct);

    // Saving the new product to the database
    await newProduct.save();
    console.log("Product added successfully:");

    // Sending the newly added product as a JSON response
    res.json(newProduct);
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

// Controller function to handle the retrieval of all products
export const getProducts = async (req, res) => {
  console.log("get api called to fetch data from db");

  try {
    // Fetching all products from the database using the ProductsModel
    const products = await ProductsModel.find();
    console.log("Products fetched successfully:", products);

    // Sending the fetched products as a JSON response
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);

    // Sending a 500 Internal Server Error response in case of an error
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteProducts = async (req, res) => {
  const productId = req.params.productId;

  console.log("Product ID received at backend:", productId);

  try {
    const deletedProduct = await ProductsModel.findOneAndDelete({
      productId: productId,
    });

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    console.log("Product deleted successfully:", deletedProduct);
    res.json(deletedProduct);
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
