// isko alaga is liye banaya becouase we can chanf=ge cloud service provider as per our needs

var ImageKit = require('imagekit');
var mongoose  = require('mongoose');


var imagekit = new ImageKit({
    publicKey:process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint:process.env.IMAGEKIT_URL_ENDPOINT

});


//async ka use nahi hoga yha pr
// Updated function to support mood-based folders
function uploadFile(file, mood){
    return new Promise((resolve ,reject)=>{
      // Mood-wise folder structure
      const folderPath = mood ? `moody-player/songs/${mood}` : "moody-player/songs";
      
      imagekit.upload({
        file:file.buffer,
        fileName: new mongoose.Types.ObjectId().toString() , // fileName should be unique
        folder: folderPath // folder name in imagekit - mood-wise
      },(error,result)=>{
        if(error){
            reject(error);
        }
        else{
            resolve(result);
        }
      })
    });
}

module.exports =uploadFile;