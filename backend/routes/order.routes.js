import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById,
} from "../controller/order.controller.js";

const router = express.Router();

router.post("/place", createOrder);
router.get("/all", getAllOrders);
router.get("/:id", getOrderById);

export default router;
