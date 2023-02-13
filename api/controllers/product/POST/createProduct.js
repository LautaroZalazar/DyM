import Product from "../../../models/product.js";

export const createProduct = async (req, res) => {
    const { body } = req
    try {
        const product = await Product.create(body)
        res.status(201).send(product)
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}