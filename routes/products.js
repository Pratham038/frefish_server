const express = require("express");
const {getProducts,getProduct,createProduct,delteProduct,updateProduct} = require('../controllers/productControllers')
const router = express.Router();

//get all
router.get("/products", getProducts);

//get single product
router.get("/products/:id", getProduct);

//post info of product
router.post('/products',createProduct);

//dele
router.delete("/products/:id", delteProduct);

//update
router.patch("/products/:id", updateProduct);

  
  
module.exports = router;
