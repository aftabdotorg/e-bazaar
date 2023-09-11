import mongoose from "mongoose";
import productSchema from "../schema/Product.js";

const Product = mongoose.model("Product", productSchema);
export default Product;
