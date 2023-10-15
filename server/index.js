require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const productsRouter = require("./routes/Products");
const categoriesRouter = require("./routes/Categories");
const brandsRouter = require("./routes/Brands");
const authRouter = require("./routes/Auth");
const usersRouter = require("./routes/User");
const cartRouter = require("./routes/Cart");
const PORT = process.env.PORT;

//middlewares
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    exposedHeaders: ["X-Total-Count"],
  })
);
app.use(express.json());
app.use("/products", productsRouter.router);
app.use("/categories", categoriesRouter.router);
app.use("/brands", brandsRouter.router);
app.use("/users", usersRouter.router);
app.use("/auth", authRouter.router);
app.use("/cart", cartRouter.router);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_STR_ATLAS);
  console.log("DB connected");
}

app.get("/", (req, res) => {
  res.json({ status: "success" });
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
