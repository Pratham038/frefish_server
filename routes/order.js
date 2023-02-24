// order.js (Express route)
const express = require("express");
const router = express.Router();
const Order = require("../models/OrderModel");
const Product = require("../models/ProductsModel");

// Place an order
router.post("/orders", async (req, res) => {
  try {
    const order = new Order({
      username: req.body.username,
      user_email: req.body.user_email,
      cart: req.body.cart,
      quantity:req.body.quantity,
      shipping_fee: req.body.shipping_fee,
      total_price: req.body.total_price,
      address:req.body.address
    });
    await order.save();
    res.status(201).json({
      message: "Order created successfully!",
      order: order
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

// Get all orders
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all orders by user_email
router.get("/orders/:user_email", async (req, res) => {
  try {
    const { user_email } = req.params;
    const orders = await Order.find({ user_email: user_email });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific order
router.get("orders/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
