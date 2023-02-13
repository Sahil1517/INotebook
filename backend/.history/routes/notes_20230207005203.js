const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//Route3: Get all the notesUsing Get "/api/notes/getuser",  login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  res.json({ notes });
});

//Route2: Add a new Note using POST "/api/notes/addnote",  login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
        
   
    const { title, description, tag } = req.body;
    //If there are errors, return Bad request and the errrors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const Note = new Note({
      title,
      description,
      tag,
      user: req.id,
    });
   const saveNote = await Note.save();
   res.json(saveNote)
} catch (error) {
        
}
    // const notes = await Notes.find({ user: req.user.id });
    // res.json({ notes });
  }
);

module.exports = router;
