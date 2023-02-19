const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
var cors = require('cors')
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/order");
const userRoutes = require("./routes/users");

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
const URI = process.env.MONGO_URI;

//express app
const app = express();
app.use(cors())
//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


//routes
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api",userRoutes);
//connect to db
mongoose.set('strictQuery', true);

mongoose
  .connect(URI)
  .then(() => {
    console.log("conn succeed");
  })
  .catch((error) => {
    console.log(error);
  });


//listen
app.listen(PORT, () => {
    console.log("4000");
  });
  