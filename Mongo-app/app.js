const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const mongoosedb=require('./mongoose');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.json("Hi");
})

app.post("/user",mongoosedb.createUser);

app.get("/find",mongoosedb.findUser);

mongoose.connect("mongodb+srv://ekeithel:x68iG1MgPmQTdwL5@cluster0.evfapms.mongodb.net/ekeithel?retryWrites=true&w=majority").then(()=>{
    app.listen(5000,()=>{
        console.log("Server started at port 5000");
    })
}).catch((err)=>{
    console.log(err);
});