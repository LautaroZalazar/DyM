import { Router } from "express";
import { deleteOrder } from "../controllers/orders/DELETE/deleteOrder.js";
import { getAllOrders } from "../controllers/orders/GET/getAllOrders.js";
import { getOrderByWC } from "../controllers/orders/GET/getOrderByWC.js";
import { createOrder } from "../controllers/orders/POST/createOrder.js";
import { updateOrder } from "../controllers/orders/PUT/updateOrder.js";

const orderRouter = Router();

orderRouter.get("/", getAllOrders);

orderRouter.get("/:withdrawalCode", getOrderByWC);

orderRouter.post("/", createOrder);

orderRouter.put("/", updateOrder);

orderRouter.delete("/", deleteOrder);

export default orderRouter;
