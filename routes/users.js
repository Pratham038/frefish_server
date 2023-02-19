const express = require('express');
const router = express.Router();
const User = require('../models/UserModel')
router.post("/users",async (req, res) => {
    try{
        const user = await User.create({
            username: req.body.username,
            userMail:req.body.userMail,
            useraddress:req.body.useraddress,
        })  
        res.status(200).json(user);
    }catch(error){
console.log(error);
    }
  })


  router.patch("/users/:userMail", async (req, res) => {
    try {
      const user = await User.findOneAndUpdate(
        { userMail: req.params.userMail },
        {
          $set: {
            username: req.body.username,
            userMail: req.body.userMail,
            useraddress: req.body.useraddress,
          },
        },
        { new: true }
      );
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  
router.get("/users", async (req,res)=>{
    const users = await User.find({}).sort({createdAt:1})
    res.status(200).json(users)
});
// router.get('/users', async (req, res) => {
//     try {
//       const userEmail = req.query.email;
//       const user = await User.findOne({ userMail: userEmail });
  
//       if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//       }
  
//       res.status(200).json(user);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ error: 'Server error' });
//     }
//   });
  
  module.exports = router;