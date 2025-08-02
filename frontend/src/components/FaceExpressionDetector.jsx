import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';
import './FaceExpression.css';
import axios from 'axios';


export default function FacialExpression({setSongs}) {
  const videoRef = useRef();

  async function detectMood() { 
    const video = videoRef.current;
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    if (!detections || detections.length === 0) {
      console.log("No face detected.");
      return;
    }

    let mostProbableExpression = 0;
    let _expression = '';

    for (const expression of Object.keys(detections[0].expressions)) {
      if (detections[0].expressions[expression] > mostProbableExpression) {
        mostProbableExpression = detections[0].expressions[expression];
        _expression = expression;
      }
    }

    // get http://localhost:300/songs?mood=happy
    axios.get(`http://localhost:3000/songs?mood=${_expression}`)
      .then(response => {
        console.log(response.data)
        setSongs(response.data.songs);
      });
  }
 

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    };

    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.error("Error accessing webcam: ", err);
      }
    };

    loadModels().then(startVideo);
  }, []);

  return (
    <div className='mood-element'>
      <video
        className='user-video-feed bg-amber-300'
        ref={videoRef}
        autoPlay
        muted
        width="720"
        height="560"
        
      />
      
      <button  onClick={detectMood}>Detect Mood</button>
    </div>
  );
}
