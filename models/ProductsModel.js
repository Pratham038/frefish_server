/*id name price image description category featured  */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    id: {
      type: String,
    },
    quantity:{
      type: [String],
      required: false,
      
    },
    name: {
      type: String,
      required: true,
    },
    
    quantity: [String],

    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    reviews:{
      type: Number,
      required: true,
    },
    stars:{
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    stock: {
      type: Number,
    },
    featured: {
      type: Boolean,
    },
    date_added: {
      type: Date,
      default: Date.now
  }
  }
);

//builds collection
module.exports = mongoose.model("Product", productSchema);
