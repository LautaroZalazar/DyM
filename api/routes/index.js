import { Router } from "express";
import userRouter from "./user.js";
import productRouter from "./product.js";
import ordersRouter from "./orders.js";
import categoryRouter from "./category.js";

const router = Router()

router.use("/user", userRouter)
router.use("/product", productRouter)
router.use("/orders", ordersRouter)
router.use("/category", categoryRouter)

export default router