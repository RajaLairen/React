const mongoose=require('mongoose');

module.exports=async function connection(){

    const connectionParams={ useNewUrlParser: true, useUnifiedTopology: true}

    await mongoose.connect(process.env.DB,connectionParams).then(()=>{
        console.log("Success");
    }).catch((err)=>{
        console.log("Error");
    });
}