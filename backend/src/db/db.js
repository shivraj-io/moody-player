const mongoose =require('mongoose')

function connectDB(){
    mongoose.connect(process.env.MONGODB_URL)
    // yha pr directly url nahi likh sakte jo ki github pe public ho jayegi
    .then(()=>{
        console.log('Connected to MONGODB');
    })
    .catch((err)=>{
        console.log("Error connnecting to MONGODB:",err);
    })
}

module.exports = connectDB;

