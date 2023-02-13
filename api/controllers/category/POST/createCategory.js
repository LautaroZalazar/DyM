import Category from "../../../models/category.js";

export const createCategory = async (req, res) => {
    const { body } = req
    try {
        const category = await Category.create(body)
        res.status(201).send(category)
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}