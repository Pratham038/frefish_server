const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  
  username: {
    type: String,
    required: true,
  },
  userMail: {
    type: String,
    required: true,
  },
  useraddress: {
    type: String,
    required: true,
  },
});

//builds collection
module.exports = mongoose.model("User", userSchema);
