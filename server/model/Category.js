import mongoose from "mongoose";
import categorySchema from "../schema/Category.js";

const Category = mongoose.model("Category", categorySchema);
export default Category;
