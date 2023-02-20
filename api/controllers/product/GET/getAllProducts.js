import Product from "../../../models/product.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    .populate({path: "detail"})
    .populate({path: "category"})
    .lean();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

