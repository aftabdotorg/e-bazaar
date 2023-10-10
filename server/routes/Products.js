import express from "express";
import {
  createProduct,
  fetchProductById,
  getAllProducts,
  updateProduct,
} from "../controller/Product.js";

// router
const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", fetchProductById);
router.patch("/:id", updateProduct);

export default router;
