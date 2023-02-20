import Orders from "../../../models/orders.js";

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Orders.find()
    .populate({path: "products"})
    .populate({path: "user"})
    .lean();
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

