import Order from "../../../models/orders.js";

export const getOrderByWC = async (req, res) => {
    const { withdrawalCode } = req.params
    try {
        const order = await Order.findOne(withdrawalCode)
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