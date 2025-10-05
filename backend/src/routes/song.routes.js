// sari api isme create krenge
const express =require('express');
const router =express.Router();
const multer= require('multer');
const uploadFile = require("../service/storage.server");

const songModel = require('../models/song.model')


const upload =  multer({storage:multer.memoryStorage()})
// iska mtlb form-data ko read kr sake
// ram me data store krega

// upload.single("name") -> name= file name

/*
title
artist
audio
mood

*/

// song upload k lye
router.post('/songs',upload.single("audio"),async (req,res)=>{
  console.log(req.body);
  console.log(req.file);  //filee ka data buffer me ayega
  
  // Pass mood to uploadFile function for folder organization
  const fileData = await uploadFile(req.file, req.body.mood);

  const song =await songModel.create({
    title:req.body.title,
    artist:req.body.artist,
    audio:fileData.url,
    mood:req.body.mood
  })


  // console.log(fileData);
  res.status(201).json({
    //status 201-> ek nya resourcse create kiya h
    message:"Song Created successfully",
    // song:req.body
    song:song

  });
}
)

router.get('/songs', async(req,res)=>{
  const {mood}=req.query;  //mood=sad

  const songs= await songModel.find({
    mood:mood
  })

  //status(200)-> req succesfully ho gyi
  res.status(200).json({
    message:"Songs fetched Successfully",
    songs
  })
})


module.exports= router;