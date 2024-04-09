//auth.js file

const express = require("express");
const router = express.Router();
require("../DB/conn");
const User = require("../Models/ChatModels/userModel");
const generateToken = require("../Middleware/generateToken");

router.use(express.json());

router.post("/signup", async (req, res) => {
  const { userName, email, pass, cPass } = req.body;

  if (!userName || !email || !pass) {
    console.log("Please Fill All Credential!");
    return res.status(422).send("Please Fill All Credentials!");
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      console.log("Email Already Exists!");
      return res.status(409).send("Email Already Exists!");
    } else if (pass !== cPass) {
      console.log("Password Don't Match!");
      return res.status(401).send("Passwords Don't Match!");
    } else {
      const user = new User({ userName, email, pass });
      await user.save();
      res.status(200).json({
        _id: user._id,
        userName: user.userName,
        email: user.email,
        token: generateToken(user._id),
      });
      console.log("User SignUp Successfull!");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/signin", async(req,res)=>{
    const {email, pass}=req.body;
    if(!email || !pass){
        return res.status(400).send("Please Fill The Credentials");
    }
    try { 
        const userExist = await User.findOne({email});
        if(userExist && (await userExist.matchPassword(pass))){
            res.json({
                _id:userExist._id,
                userName:userExist.userName,
                email:userExist.email,
                token:generateToken(userExist._id)
            });

        }else{
            return res.status(404).send("Please Enter Valid Credentials!")
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send(" Internal Server Error!");
    }
});

module.exports = router;

