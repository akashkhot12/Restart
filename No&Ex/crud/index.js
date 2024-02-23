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
    const {firstName,LastName,gender} = req.body;
    let addData = await data.insertOne({firstName,LastName,gender})
    res.status(201).json({message:"inserted Successfully",addData})
})

app.put('/data/:id',async(req,res)=>{
    let data = await db();
    const {firstName,LastName,gender} = req.body;
    let updateData = await data.updateOne({_id:req.params.id},{$set:{firstName,LastName,gender}});
    if (updateData) {
        res.status(201).json({message:"update successfully", updateData})
    } else {
        res.status(401).json({message:"data is not inserted"})
    }

    // const updatedResource = await data.findByIdAndUpdate(req.params.id,
    //     { firstName, LastName,gender },
    //     { new: true }
    //   );
    //   res.json(updatedResource);
})

app.delete('/:id',async(req,res)=>{
    let data = await db();
    let deletData = await data.deleteMany({_id:req.body.params});
    res.status(201).json({message:"delete successfully", deletData})
})


app.listen(5000,()=>{
    console.log('server is up on 5000');
})