// const express = require("express");
// const router = express.Router();
// const fetchuser = require("../middleware/fetchuser");
// const Note = require("../models/Note");
// const { body, validationResult } = require("express-validator");

// //Route1: Get all the notesUsing Get "/api/notes/getuser",  login required
// router.get("/fetchallnotes", fetchuser, async (req, res) => {
//     try {
//         const notes = await Notes.find({ user: req.user.id });
//   res.json({ notes });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal server Error");
//       }
  
// });

// //Route2: Add a new Note using POST "/api/notes/addnote",  login required
// router.post(
//   "/addnote",
//   fetchuser,
//   [
//     body("title", "Enter a valid title").isLength({ min: 3 }),
//     body("description", "Description must be atleast 5 characters").isLength({
//       min: 5,
//     }),
//   ],
//   async (req, res) => {
//     try {
        
   
//     const { title, description, tag } = req.body;
//     //If there are errors, return Bad request and the errrors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     const Note = new Note({
//       title,
//       description,
//       tag,
//       user: req.id,
//     });
//    const saveNote = await Note.save();
//    res.json(saveNote)
// } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal server Error");
//   }
//     // const notes = await Notes.find({ user: req.user.id });
//     // res.json({ notes });
//   }
// );

// module.exports = router;
const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Notes using: GET "/api/auth/getuser". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new Note using: POST "/api/auth/addnote". Login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {
        try {

            const { title, description, tag } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()

            res.json(savedNote)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })
// ROUTE 3: Update an existing Note using: POST "/api/auth/updatenote". Login required
router.post('/updatenote/:id', fetchuser,  async (req, res) =>{
     const{title, description, tag} = req.body;
     // Create a newnote object
     const newNote = {};
     if(title) {newNote.title = title};
     if(description) {newNote.description = description};
     if(tag) {newNote.tag = tag};

     // Find the note to be updated and update it
     const note = Note.findById(req.params.id);
     if(!note){return res.status(404).send("Not found")}

     if(note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
     }
     note = await Note.find

     })
module.exports = router