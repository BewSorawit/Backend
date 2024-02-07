const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello Express.js")
})
app.get("/product",(req,res)=>{
    res.send("Hello Product")
})
app.listen(8080,()=>{
    console.log("run server at port 8080");
})