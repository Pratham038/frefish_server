const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const orderItemSchema = new Schema({
//   product: {
//     type:Array,
//     required: true
//   },
//   quantity: { type: Number, required: true }
// });

const orderSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  user_email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  cart: { type: Array },
  quantity: { type: Number, required: true },
  shipping_fee: { type: Number },
  total_price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
