import Category from "../../../models/category.js";

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().lean();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

