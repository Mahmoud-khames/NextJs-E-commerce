const express = require("express");
const router = express.Router();
const couponController = require("../controllers/coupon.controller");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
router.get("/", couponController.getAllCoupons);
router.post("/", authMiddleware, isAdmin, couponController.createCoupon);
router.get("/:id", couponController.getCouponById);
router.put("/:id", authMiddleware, isAdmin, couponController.updateCoupon);
router.delete("/:id", authMiddleware, isAdmin, couponController.deleteCoupon);

module.exports = router;
