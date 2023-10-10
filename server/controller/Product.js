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
  let query = Product.find({});

  if (req.query.category) {
    query = query.find({ category: req.query.category });
  }

  if (req.query.brand) {
    query = query.find({ brand: req.query.brand });
  }

  if (req.query._sort && req.query._order) {
    query = query.sort({ [req.query._sort]: req.query._order });
  }

  if (req.query.page && req.query.limit) {
    const qty = req.query.limit;
    const pages = req.query.page;
    query = query.skip(qty * (pages - 1)).limit(qty);
  }

  try {
    const products = await query.exec();
    return res.status(201).json(products);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export { createProduct, getAllProducts };
