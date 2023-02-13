import { Router } from "express";
import { deleteCategory } from "../controllers/category/DELETE/deleteCategory.js";
import { getAllCategories } from "../controllers/category/GET/getAllCategories.js";
import { createCategory } from "../controllers/category/POST/createCategory.js";

const categoryRouter = Router()

categoryRouter.get("/", getAllCategories)

categoryRouter.post("/", createCategory)

categoryRouter.delete("/", deleteCategory)

export default categoryRouter