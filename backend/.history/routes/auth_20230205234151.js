const express = require('express');
const User = require('../models/')
const router = express.Router();


router.get('/', (req, res)=>{
    
    console.log(req.body);
    res.send(req.body);
})

module.exports = router