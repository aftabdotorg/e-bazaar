import Product from "../model/Product.js";

// create new product
const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(400).json(error);
  }
};

// fetching all products
const getAllProducts = async (req, res) => {
  let query = Product.find({});

  // for total count
  let totalProductsCount = Product.find({});

  // query params
  // category
  if (req.query.category) {
    query = query.find({ category: req.query.category });
    totalProductsCount = totalProductsCount.find({
      category: req.query.category,
    });
  }

  //brand
  if (req.query.brand) {
    query = query.find({ brand: req.query.brand });
    totalProductsCount = totalProductsCount.find({
      brand: req.query.brand,
    });
  }

  //sort
  if (req.query._sort && req.query._order) {
    query = query.sort({ [req.query._sort]: req.query._order });
  }

  //pagination
  if (req.query._page && req.query._limit) {
    const qty = req.query._limit;
    const pages = req.query._page;
    query = query.skip(qty * (pages - 1)).limit(qty);
  }

  //totalqty for header
  const totalqty = await totalProductsCount.count().exec();
  // console.log({ totalqty });

  try {
    const products = await query.exec();
    // setting header (name, value)
    res.set("X-Total-Count", totalqty);

    return res.status(201).json(products);
  } catch (error) {
    return res.status(400).json(error);
  }
};

// fetch product by id
const fetchProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(err);
  }
};

// update product
const updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const updProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

export { createProduct, getAllProducts, fetchProductById, updateProduct };
