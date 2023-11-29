import mongoose from "mongoose";

const productsStructure = mongoose.Schema({
    id : Number,
    price : Number,
    Description : String,
    image : String,
    quantity : Number,
    size : ["sm", "xl" ,"xxl"],
    category : ["shirts","jeans","undergarments","perfumes","accessories"]
});

const productsModel = mongoose.Model("Product", productsStructure);