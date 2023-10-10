import express from "express";
import mongoose from "mongoose";
import "dotenv/config"
import productRoutes from "./routes/Products.js";
const app = express();
const PORT = 8080;

app.use(express.json());
app.use("/products", productRoutes);

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

app.get("/", (req, res) => {
  res.json({ status: "success" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
