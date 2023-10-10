import express from "express";
import { createCategory, getCategories } from "../controller/Category.js";
// router
const router = express.Router();

router.get("/", getCategories);
router.post("/", createCategory);

export default router;
