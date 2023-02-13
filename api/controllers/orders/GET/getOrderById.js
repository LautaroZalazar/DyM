import Order from "../../../models/orders.js";

export const getOrderById = async (req, res) => {
    const { id } = req.params
    try {
        const order = await Order.findById(id)
        .populate({path: "Product"})
        .populate({path: "User"})
        .lean()
        if (!order) { 
            return res.status(404).json({success: false, msg: "Order not found" })
        }
        return res.status(200).json({success: true, data: order});
    } catch (error) {
        return res.status(404).json({ success: false });
    }
}