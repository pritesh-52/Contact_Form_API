const express=require("express");
const app=express();
const cors=require("cors");
require("./src/db/db");

app.get("",(req,res)=>{
    res.send("Pritesh Bhatiya");
})

app.listen(8000,()=>{
    console.log("Success");
})
app.use(express.json());
app.use(cors());
app.use('/contact',require('./src/router/routing'));