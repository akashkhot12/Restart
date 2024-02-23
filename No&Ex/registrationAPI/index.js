const database = require('./connection');
const express = require('express');
const app = express();
const router = require('./router')



app.use(express.json());
app.use('/user',router)


app.get('/',(req,res)=>{
    res.send("this is my first server")
})

app.listen(5000,()=>{
    console.log("server is up on 5000 port");
})