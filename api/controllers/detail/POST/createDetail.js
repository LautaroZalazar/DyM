import Detail from "../../../models/detail.js";

export const createDetail = async (req, res) => {
    const { body } = req
    try {
        const detail = await Detail.create(body)
        res.status(201).send(detail._id)
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}