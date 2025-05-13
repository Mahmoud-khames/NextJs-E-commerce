const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.Controller");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
router.get("/", authMiddleware, isAdmin, orderController.getAllOrders);
router.get("/:id", authMiddleware, orderController.getOrderById);
router.put("/:id", authMiddleware, orderController.updateOrder);
router.delete("/:id", authMiddleware, orderController.deleteOrder);
router.post("/", authMiddleware, orderController.createOrder);



module.exports = router;