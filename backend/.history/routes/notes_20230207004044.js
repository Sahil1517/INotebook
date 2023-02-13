const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require("express-validator");

 //Route3: Get all the notesUsing Get "/api/notes/getuser",  login required
router.get('/fetchallnotes', fetchuser, async (req, res)=>{
    const notes = await Notes.find({user: req.user.id});
    res.json({notes})
})

//Route3: Add a new Note using POST "/api/notes/addnote",  login required
router.post('/addnote', fetchuser,[
    
] async (req, res)=>{
    const notes = await Notes.find({user: req.user.id});
    res.json({notes})
})

module.exports = router