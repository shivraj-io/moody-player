import React from "react";
import FaceExpressionDetector from "./components/FaceExpressionDetector";
import MoodSongs from "./components/MoodSongs";
import { useState } from "react";

function App() {

const [Songs,setSongs]= useState([
        
    ])



  return (
    <div>
      <h2 style={{ textAlign: "center" ,margin:"20px"}}>Moody Player</h2>
      <FaceExpressionDetector setSongs={setSongs} />
      <MoodSongs Songs={Songs}/>
      
    </div>
  );
}

export default App;
