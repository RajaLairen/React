const mongoose=require('mongoose');
const User=require('./User');

const connectdb=()=>{
    mongoose.connect("mongodb+srv://ekeithel:x68iG1MgPmQTdwL5@cluster0.evfapms.mongodb.net/ekeithel?retryWrites=true&w=majority").then(()=>{
        console.log("Connected Succesfully")
    }).catch((error)=>{
        console.log(error);
    })
}

const createUserCookie=async(req,res)=>{
    const createdUserCookie=new User({
        username:"Tom",
        password:"This is my password"
    })

    await createdUserCookie.save();
}

const getUserData=async(req,res)=>{
    const result=await User.findOne({username:"Tom"});
    console.log(result);
    res.json(result);
}

exports.connectdb=connectdb;
exports.createUserCookie=createUserCookie;
exports.getUserData=getUserData;