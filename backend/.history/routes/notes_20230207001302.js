const express = require('express');
const router = express.Router();

 //Route3: Get all the notesUsing POST "/api/auth/getuser",  login required
router.get('/fetchallnotes', (req, res)=>{
    
    res.json([])
})

module.exports = router