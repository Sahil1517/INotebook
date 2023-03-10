const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
router.post('/createuser',[
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
] , async(req, res)=>{ 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try{
 
  let user = await User.findOne({email: req.body.email});
  if(user){
    return res.status(400).json({error:"sorry a user with this email already exist"})
  }
  user = await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    })
  //   .then(user => res.json(user))
  //   .catch(err=> {console.log(err)
  // res.json({error: 'Please enter a unique value for email', message: err.message})})
      res.json({user})
    } catch(error){
      console.error(error.message);
      res.status(500)
    }
} )

module.exports = router