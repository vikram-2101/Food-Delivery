import express from "express";
import authMidlleware from "../middleware/auth.js";

import {
  listOrders,
  placeOrder,
  updateStatus,
  userOrders,
  verifyOrder,
  ordersByStatus,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMidlleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMidlleware, userOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);
orderRouter.post("/bystatus", ordersByStatus);
export default orderRouter;
