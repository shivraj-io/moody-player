const express =require('express')
const songRoutes = require('./routes/song.routes')
const cors = require('cors') //yeh humein cors ki wajah se error aata h

const app=express();

app.use(cors()); //yeh humein cors ki wajah se error aata h
app.use(express.json()); //yeh only raw data k format me hi kaam ayega 

// for form-data -> we install multer

app.use('/', songRoutes);  //app ko batane k liya ki api create ki h

module.exports =app;

