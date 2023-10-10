import mongoose from "mongoose";
import brandSchema from "../schema/Brand.js";

const Brand = mongoose.model("Brand", brandSchema);
export default Brand;
