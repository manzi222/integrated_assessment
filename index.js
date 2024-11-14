const express=require('express');
const { json } = require('express/lib/response');
const app=express();
const port=3000;
app.post('/',(req,res)=>{
res.status(200).json({message:"post published by user"});
});
app.get('/',(req,res)=>{
    res.status(200).json({message:"create post"});
});
app.listen(port,()=>{
       console.log(`server is running at port: ${port}`);
});
