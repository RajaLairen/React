const express=require('express');
const mongoose=require('./mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const User = require('./model/user');
const bcrypt=require('bcrypt');
const { create } = require('./model/user');
const {verify} =require('jsonwebtoken');

const app=express();
app.use(cors());
app.use(bodyParser.json());


mongoose.connectdb();

app.post("/createProduct",mongoose.createUser);

app.post("/login",async(req,res,next)=>{
    const {email,password}=req.body;
    console.log(typeof(password));

    const userData=await User.findOne({email:email});

    if(userData){
        try{
            const isMatch=bcrypt.compare(password,userData.password,function(err,result){
                if(err){
                    console.log(err);
                }
                else{
                }
            });
        }
        catch(error){
            console.log(error);
        }

        
    }
})

app.post("/profile",async(req,res)=>{
    let token=req.body.cookie;
    console.log(token);
    let isVarified= verify(token,"hithisissecretkey123asdffaedeed");

    const userId=await User.findOne({tokens:token});

    console.log(userId);
})




app.listen(5000,()=>{
    console.log("Server started at port 5000");
})