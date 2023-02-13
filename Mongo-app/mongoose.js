const mongoose=require('mongoose');

const User=require('./models/user');

const createUser=async(req,res,next)=>{
    const createdUser=new User({
        name:req.body.name,
        password:req.body.password,
        address:req.body.address,
    })

    const result=await createdUser.save();

    res.json(result);
}

const findUser=async(req,res,next)=>{
    const findTheUser=await User.find({name:"mke"})

    res.json(findTheUser);
}


exports.createUser=createUser;
exports.findUser=findUser;