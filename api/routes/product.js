import { Router } from "express";
import { getAllProducts } from "../controllers/product/GET/getAllProducts.js";
import { getProductById } from "../controllers/product/GET/getProductById.js";

const productRouter = Router()

productRouter.get("/", getAllProducts)

productRouter.get("/:id", getProductById)


export default productRouter