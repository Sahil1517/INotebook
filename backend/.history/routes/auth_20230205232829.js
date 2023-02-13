const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    obj = {
        a: "thios",
        number
    }
    res.json(obj)
})