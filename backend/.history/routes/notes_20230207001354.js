const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');

 //Route3: Get all the notesUsing Get "/api/notes/getuser",  login required
router.get('/fetchallnotes', (req, res)=>{
    
    res.json([])
})

module.exports = router