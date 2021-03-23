const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("hello heroku");
})


app.listen(port,()=>{
    console.log("app is listening at port 3000")
})