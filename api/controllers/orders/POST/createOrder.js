import Order from "../../../models/orders.js";

export const createOrder = async (req, res) => {
    const { body } = req
    try {
        const order = await Order.create(body)
        res.status(201).send(order)
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}