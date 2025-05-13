const orderModel = require("../models/orderModel");

class Order {
  async getAllOrders(req, res) {
    try {
      if (req.user.role === "admin") {
        const orders = await orderModel
          .find({})
          .populate("userId")
          .populate("productId");
        if (orders) {
          return res.json({ orders });
        } else {
          return res.json({ error: "Orders not found" });
        }
      } else {
        return res.json({
          error: "You are not authorized to access this page",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getOrderById(req, res) {
    try {
      const { id } = req.params;
      const order = await orderModel.findById(id);
      if (order) {
        return res.json({ order });
      } else {
        return res.json({ error: "Order not found" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async updateOrder(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const order = await orderModel.findByIdAndUpdate(id, { status });
      if (order) {
        return res.json({ success: "Order updated successfully" });
      } else {
        return res.json({ error: "Order not found" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteOrder(req, res) {
    try {
      const order = await orderModel.findByIdAndDelete(req.params.id);
      if (order) {
        return res.json({ success: "Order deleted successfully" });
      } else {
        return res.json({ error: "Order not found" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async createOrder(req, res) {
    const { userId, productId, quantity } = req.body;

    try {
      const order = await orderModel.create({ userId, productId, quantity });
      if (order) {
        return res.json({ success: "Order created successfully" });
      } else {
        return res.json({ error: "Failed to create order" });
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const orderController = new Order();
module.exports = orderController;
