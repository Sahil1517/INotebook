const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');


router.post('/',[
    body('username').isEmail(),
    body('email').isEmail(),
], (req, res)=>{
    
    console.log(req.body);
    const user = User(req.body);
    user.save()
    res.send(req.body);
})

module.exports = router