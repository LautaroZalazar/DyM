import Category from "../../../models/category.js";

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory)
      return res.status(404).json({ success: false, msg: "Category not found" });
    return res.status(200).json({ success: true, data: deletedCategory });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
