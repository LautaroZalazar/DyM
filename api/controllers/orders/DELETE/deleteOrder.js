import Order from "../../../models/orders.js";

export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder)
      return res.status(404).json({ success: false, msg: "Order not found" });
    return res.status(200).json({ success: true, data: deletedOrder });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
