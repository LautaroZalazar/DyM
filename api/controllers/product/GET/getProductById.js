import Product from "../../../models/product.js";

export const getProductById = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findById(id)
        .populate({path: "detail"})
        .populate({path: "category"})
        .lean()
        if (!product) { 
            return res.status(404).json({success: false, msg: "Product not found" })
        }
        return res.status(200).json({success: true, data: product});
    } catch (error) {
        return res.status(404).json({ success: false });
    }
}