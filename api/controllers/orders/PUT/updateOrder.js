import Order from "../../../models/orders.js";

export const updateOrder = async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
        const orderUpdated = await Order.findByIdAndUpdate(id, body, {runValidators: true, new: true});
        if (!orderUpdated) return res.status(404).json({success: false, msg: "Order not found" });
        return res.status(200).json({success: true, data: orderUpdated});
    } catch (error) {
        console.log(error);
        return res.status(404).json({success: false, error });
    }
}