import React, { useState, useEffect } from "react";
import { Typography, Divider } from "@material-ui/core";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";
import LiveWebcamList from "./LiveWebcamList";

export default function LiveWebcamDetections() {
  const [emotion, setEmotion] = useState([]);

  useEffect(() => {
    async function loadModels() {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");
    }
    loadModels();
    const videoCanvas = document.getElementById("videoCanvas");
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoCanvas, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();
      try {
        setEmotion(detections["0"].expressions);
      } catch (error) {
        console.log("No Face Detected...");
      }
    }, 100);
  }, []);

  return (
    <div>
      <Typography variant="h5">Live</Typography>
      <Divider style={{ margin: "20px 0px" }}></Divider>
      <Webcam
        id={"videoCanvas"}
        audio={false}
        style={{ width: "50%" }}
      ></Webcam>
      <LiveWebcamList emotionArray={Object.entries(emotion)}></LiveWebcamList>
    </div>
  );
}
