import Detail from "../../../models/detail.js";

export const updateDetail = async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
        const detailUpdated = await Detail.findByIdAndUpdate(id, body, { new: true});
        if (!detailUpdated) return res.status(404).json({success: false, msg: "Detail not found" });
        return res.status(200).json({success: true, data: detailUpdated});
    } catch (error) {
        console.log(error);
        return res.status(404).json({success: false, error });
    }
}