const express = require('express');
const db = require('./connections')
const app = express();

app.use(express.json());

app.get('/',async(req,res)=>{
    let data =  await db();
    let getData = await data.find().toArray();
    res.status(201).json({message:getData});
    console.log(getData);
});

app.post('/',async(req,res)=>{
    let data = await db();
    let addData = await data.insertOne({
        firstName:req.body,
        LastName:req.body,
        gender:req.body
    })
    res.status(201).json({message:"inserted Successfully",addData})
})

app.put('/:id',async(req,res)=>{
    
})


app.listen(5000,()=>{
    console.log('server is up on 5000');
})