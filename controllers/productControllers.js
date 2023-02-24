const mongoose = require('mongoose')
const Product = require("../models/ProductsModel");

// create a new workout
const createProduct = async(req,res) => {
    const { id, name, image,price, description,stock, quantity,category,reviews,stars, featured } = req.body;

    try {
      const product = await Product.create({
        id,
        image,
        quantity,
        stock,
        name,
        reviews,
        stars,
        price,
        description,
        category,
        featured,
      });
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
    }
}

//get all products
const getProducts = async (req,res)=>{
    const product = await Product.find({}).sort({createdAt:-1})
    res.status(200).json(product)
}


//get single product
const getProduct = async(req,res) =>{
  // const {id} = req.params

  // if(!mongoose.Types.ObjectId.isValid({id:'id'})){
  //     return res.status(404).json({error:'NO such PRODUCT'})
  // }

  const product = await Product.findOne({id:req.params.id})
  if (!product){
      return res.status(404).json({error:'No such PRODUCT'})
  }
  res.status(200).json(product)

}

//update workout
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: {
        image: req.body.image,
        quantity: req.body.quantity,
        stock: req.body.stock,
        name: req.body.name,
        reviews: req.body.reviews,
        stars: req.body.stars,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        featured: req.body.featured,
        },
      },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
}

// delete a workout

const delteProduct = async(req,res) =>{
  // const {id} = req.params

  // if(!mongoose.Types.ObjectId.isValid(id)){
  //     return res.status(404).json({error:'NO such PRODUCT'})
  // }

  const product = await Product.findOneAndDelete({id:req.params.id})
  if (!product){
      return res.status(404).json({error:'No such PRODUCT'})
  }
  res.status(200).json(product)

  }



module.exports = {
    getProducts,
    createProduct,
    getProduct,
    delteProduct,
    updateProduct

  }

// '/upload', upload.single('image'), (req, res) => {});