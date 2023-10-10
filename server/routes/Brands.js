import express from "express";
import { createBrand, getBrands } from "../controller/Brand.js";

// router
const router = express.Router();

router.get("/", getBrands);
router.post("/", createBrand);

export default router;
