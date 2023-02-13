const express = require('express');
const router = express.Router();

router.get('/fetch', (req, res)=>{
    
    res.json([])
})

module.exports = router