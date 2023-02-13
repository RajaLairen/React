const mongoose=require('mongoose');
const User=require('./model/user');
const jwt=require('jsonwebtoken');


const connectdb=()=>{
    mongoose.connect("mongodb+srv://ekeithel:x68iG1MgPmQTdwL5@cluster0.evfapms.mongodb.net/ekeithel?retryWrites=true&w=majority").then(()=>{
        console.log("Connect succesfully");
    }).catch((err)=>{
        console.log(err);
    });
}

const createUser=async(req,res,next)=>{
    const {name,email,address,password}=req.body;
    let token=await generateToken();

    const findUser=await User.findOne({email:email})
    if(!findUser){
        const createdUser=new User({
            name:name,
            email:email,
            address:address,
            password:password,
            tokens:token,
        })

        
        await createdUser.save();

        console.log(createdUser._id);
        
        res.status(200).json({token:token});
    }
    else{
        res.status(442).json({"error":"Email already exist"});
    }

}

const generateToken=async function(){
    try{
        let token=await jwt.sign({_id:this._id},"hithisissecretkey123asdffaedeed");
        return token;
    }
    catch(err){
        console.log(err);
    }
}

exports.connectdb=connectdb;
exports.createUser=createUser;