import { Router } from "express";
import { createDetail } from "../controllers/detail/POST/createDetail.js";
import { updateDetail } from "../controllers/detail/PUT/updateDetail.js";

const detailRouter = Router()

detailRouter.post("/", createDetail)

detailRouter.put("/", updateDetail)


export default detailRouter