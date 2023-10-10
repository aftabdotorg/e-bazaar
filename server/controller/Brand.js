import Brand from "../model/Brand.js";

const getBrands = async (req, res) => {
  try {
    const brands = await Brand.find({});
    res.status(200).json(brands);
  } catch (error) {
    res.status(400).json(err);
  }
};

const createBrand = async (req, res) => {
  try {
    const newBrand = await Brand.create(req.body);
    return res.status(201).json(newBrand);
  } catch (error) {
    return res.status(400).json(error);
  }
};


export { getBrands, createBrand };
