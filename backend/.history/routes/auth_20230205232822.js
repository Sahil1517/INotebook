const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    obj = {
        a: ""
    }
    res.json(obj)
})