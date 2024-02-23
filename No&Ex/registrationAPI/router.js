const express = require('express');
const router = express.Router();


router.post('/',async(req,res)=>{
    res.send("this is post api ")
})

module.exports= router;