import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import productRoutes from "./routes/Products.js";
import brandRoutes from "./routes/Brands.js";
import categoriesRoutes from "./routes/Categories.js";
const app = express();
const PORT = process.env.PORT || 7070;

// middlewares
// for cors erros
app.use(cors({
  exposedHeaders:['X-Total-Count']
}));
// for parsing
app.use(express.json());
// for routing
app.use("/products", productRoutes);
app.use("/brands", brandRoutes);
app.use("/categories", categoriesRoutes);

// db connect
const connectDB = async () => {
  try {
    const res = await mongoose.connect(
      process.env.MONGODB_CONNECTION_STRING_ATLAS,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB connected: ${res.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectDB();

// health check
app.get("/", (req, res) => {
  res.json({ status: "success" });
});

// server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
