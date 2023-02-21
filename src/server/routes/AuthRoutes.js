const router = require("express").Router();
const User = require("../models/UserSchema");

router.post('/register', async (req, res) => {
  try {
    const { email, password} = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(500).json({success: false, message: 'User already exists'});
    }
    const newUser = await new User({ email, password });
    await newUser.save();
    res.status(200).json({  success:true});
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: error});
  }
});

router.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body;
    const user =  await User.findOne({email});
    if(!user) {
      res.status(400).json({ success: false, message: 'User not found'});
    }
    const validate = await user.isValidPassword(password);
    if(!validate) {
      res.status(400).json({ success: false, message: 'Password did not match'});
    }
    const token = await user.generateToken();
    res.status(200).json({ success: true, token: token});
    
  } catch(error) {
    console.log(error);
  }
  
});

router.get('/getAll', (req, res) => {
  User.find((err, users) => {
    if(err) {
      res.status(500).json({success: false, message: err});
    } else {
      res.status(200).json({success: true, users: users});
    }
  });
});

module.exports = router;
