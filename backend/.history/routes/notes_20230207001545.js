const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');

 //Route3: Get all the notesUsing Get "/api/notes/getuser",  login required
router.get('/fetchallnotes', fetchuser, (req, res)=>{
    const notes = await Notes.find({user: req.user})
    res.json([])
})

module.exports = router