import Category from "../model/Category.js";

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).exec();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json(err);
  }
};

const createCategory = async (req, res) => {
  try {
    const newCat = await Category.create(req.body);
    return res.status(201).json(newCat);
  } catch (error) {
    return res.status(400).json(error);
  }
};


export { getCategories, createCategory };
