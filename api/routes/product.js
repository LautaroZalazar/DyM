import { Router } from "express";
import { deleteProduct } from "../controllers/product/DELETE/deleteProduct.js";
import { getAllProducts } from "../controllers/product/GET/getAllProducts.js";
import { getProductById } from "../controllers/product/GET/getProductById.js";
import { createProduct } from "../controllers/product/POST/createProduct.js";
import { updateProduct } from "../controllers/product/PUT/updateProduct.js";

const productRouter = Router();

productRouter.get("/", getAllProducts);

productRouter.get("/:id", getProductById);

productRouter.post("/", createProduct);

productRouter.put("/:id", updateProduct);

productRouter.delete("/", deleteProduct);

export default productRouter;
