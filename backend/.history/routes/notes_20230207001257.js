const express = require('express');
const router = express.Router();

 //Route3: Get Using POST "/api/auth/getuser",  login required
router.get('/fetchallnotes', (req, res)=>{
    
    res.json([])
})

module.exports = router