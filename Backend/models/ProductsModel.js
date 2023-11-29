import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: String,
  productId: Number,
  productPrice: Number,
  productDescription: String,
  productImage: String,
  productQuantity: Number,
  productSizes: [String],
  productCategory: [String],
});

const Product = mongoose.model("Product", productSchema);

export default Product;
