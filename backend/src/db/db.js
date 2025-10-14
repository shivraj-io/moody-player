const mongoose =require('mongoose')

// function connectDB(){
//     mongoose.connect(process.env.MONGODB_URL)
//     // yha pr directly url nahi likh sakte jo ki github pe public ho jayegi
//     .then(()=>{
//         console.log('Connected to MONGODB');
//     })
//     .catch((err)=>{
//         console.log("Error connnecting to MONGODB:",err);
//     })
// }

let isconnected = false;

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URL,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        }
        );
        if(!isconnected){
            isconnected = true;
            console.log("Connected to MONGODB");
        }else{
            console.log("Already connected to MONGODB");
        }
    }catch(err){
        console.log("Error connecting to MONGODB:",err);
    }
}

module.exports = connectDB;

