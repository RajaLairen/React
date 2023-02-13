const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    tokens:{
        type:String,
        required:true
    }
})

//Middle ware
userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,12);
    }

    next();//Middle ware use next
})

//generate token

userSchema.methods.generateAuthToken=async function(){
  
}

const User=mongoose.model("User",userSchema);

module.exports=User;