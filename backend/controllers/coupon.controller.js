const couponModel = require("../models/couponModel");

class Coupon {
  async getAllCoupons(req, res) {
    try {
      const coupons = await couponModel.find({ isDeleted: false });
      return res.json({ coupons });
    } catch (error) {
      console.log(error);
      return res.json({ error: "Failed to get coupons" });
    }
  }
  async getCouponById(req, res) {
    const { id } = req.params;
    const coupon = await couponModel.findById(id);
    try {
      if (coupon) {
        return res.json({ coupon });
      } else {
        return res.json({ error: "Coupon not found" });
      }
    } catch (error) {
      console.log(error);
      return res.json({ error: "Failed to get coupon" });
    }
  }
  async createCoupon(req, res) {
    const { name, code, discount, expiryDate } = req.body;
    try {
      const coupon = await couponModel.create({ name, code, discount, expiryDate });
      if (coupon) {
        return res.json({ success: "Coupon created successfully" });
      } else {
        return res.json({ error: "Failed to create coupon" });
      }
    } catch (error) {
      console.log(error);
      return res.json({ error: "Failed to create coupon" });
    }
  }

  async updateCoupon(req, res) {
    const { id } = req.params;
    const { name, code, discount, expiryDate } = req.body;
    try {
      const coupon = await couponModel.findByIdAndUpdate(id, { name, code, discount, expiryDate });
      if (coupon) {
        return res.json({ success: "Coupon updated successfully" });
      } else {
        return res.json({ error: "Coupon not found" });
      }
    } catch (error) {
      console.log(error);
      return res.json({ error: "Failed to update coupon" });
    }
  }

  async deleteCoupon(req, res) {    
    const { id } = req.params;
    try {
      const coupon = await couponModel.findByIdAndUpdate(id, { isDeleted: true });
      if (coupon) {
        return res.json({ success: "Coupon deleted successfully" });
      } else {
        return res.json({ error: "Coupon not found" });
      }
    } catch (error) {
      console.log(error);
      return res.json({ error: "Failed to delete coupon" });
    }
  }
  
}

const couponController = new Coupon();
module.exports = couponController;
