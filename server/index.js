import express from "express";
import mongoose from "mongoose";
import createProduct from "./controller/Product.js";
const app = express();
const PORT = 8080;

app.use(express.json());

const connectDB = async () => {
  try {
    const res = await mongoose.connect(`mongodb://127.0.0.1:27017/ecommerce`);
    console.log(`MongoDB connected: ${res.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectDB();

app.get("/", (req, res) => {
  res.json({ status: "success" });
});

app.post("/products", createProduct);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
