import Product from "../model/Product.js";

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = Product.find({});
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export  {createProduct};
