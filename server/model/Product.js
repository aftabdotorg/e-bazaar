import mongoose from "mongoose";
import productSchema from "../schema/Product.js";

// product model
const Product = mongoose.model("Product", productSchema);
export default Product;
