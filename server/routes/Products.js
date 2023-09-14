import express from "express";
import {createProduct} from "../controller/Product.js";

const router = express.Router();

router.post("/", createProduct);

export default router