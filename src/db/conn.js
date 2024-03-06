const mongoose =require("mongoose");

mongoose.connect(process.env.mongourl,
{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is successfully")
}).catch((e)=>{
    console.log("connecting error")
    
})