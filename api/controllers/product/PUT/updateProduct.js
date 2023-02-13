import Product from "../../../models/product.js";

export const updateProduct = async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
        const productUpdated = await Product.findByIdAndUpdate(id, body, { new: true});
        if (!productUpdated) return res.status(404).json({success: false, msg: "Product not found" });
        return res.status(200).json({success: true, data: productUpdated});
    } catch (error) {
        console.log(error);
        return res.status(404).json({success: false, error });
    }
}