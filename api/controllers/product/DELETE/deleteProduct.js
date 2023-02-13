import Product from "../../../models/product.js";

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct)
      return res.status(404).json({ success: false, msg: "Product not found" });
    return res.status(200).json({ success: true, data: deletedProduct });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
