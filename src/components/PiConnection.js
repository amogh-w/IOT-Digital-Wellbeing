import React, { useEffect, useState } from "react";
import openSocket from "socket.io-client";
import { Typography, Button, Divider } from "@material-ui/core";
import * as faceapi from "face-api.js";
import LiveWebcamList from "./LiveWebcamList";

const socket = openSocket("http://localhost:8000");

export default function PiConnection() {
  useEffect(() => {
    socket.on("hostIsReady", () => {
      setHostAlive(true);
    });
    socket.on("imageTaken", snapshot => {
      setReceivedImage(snapshot);
    });
    async function loadModels() {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");
    }
    loadModels();
  }, []);

  const [hostAlive, setHostAlive] = useState(false);
  const [receivedImage, setReceivedImage] = useState("");
  const [emotion, setEmotion] = useState([]);

  const detectEmotions = () => {
    const image = document.getElementById("mango");
    console.log(image);
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(image, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();
      try {
        setEmotion(detections["0"].expressions);
      } catch (error) {
        console.log("No Face Detected...");
      }
    }, 100);
  };

  return (
    <div>
      {hostAlive ? (
        <React.Fragment>
          <Typography>Pi Connection: Successful</Typography>
          <Button
            onClick={() => socket.emit("getImageRequest")}
            variant="contained"
            color="secondary"
            style={{ marginTop: "16px", marginBottom: "8px" }}
          >
            Start Streaming
          </Button>
          <Button
            onClick={detectEmotions}
            variant="outlined"
            color="secondary"
            style={{
              marginTop: "16px",
              marginBottom: "8px",
              marginLeft: "8px"
            }}
          >
            Request Emotion Details
          </Button>

          <Divider style={{ margin: "20px 0px" }}></Divider>

          <Typography>Live Feed from Pi</Typography>
          <img id="mango" alt="imageFromPi" src={`${receivedImage}`}></img>

          <LiveWebcamList
            emotionArray={Object.entries(emotion)}
          ></LiveWebcamList>
        </React.Fragment>
      ) : (
        <Typography>Pi Connection: Failed</Typography>
      )}
    </div>
  );
}
