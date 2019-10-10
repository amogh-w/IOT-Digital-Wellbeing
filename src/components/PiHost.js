import React, { useEffect, useState } from "react";
import openSocket from "socket.io-client";
import { Typography } from "@material-ui/core";
import Webcam from "react-webcam";

const socket = openSocket("http://localhost:8000");

export default function PiHost() {
  useEffect(() => {
    socket.emit("hostIsReady");
  }, []);
  const [snapshot, setSnapshot] = useState("");
  const webcamRef = React.useRef(null);
  const image = React.useRef(snapshot);
  image.current = snapshot;

  const getImage = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setSnapshot(imageSrc);
  }, [webcamRef]);

  socket.on("getImageRequest", () => {
    setInterval(() => {
      getImage();
      socket.emit("imageTaken", image.current);
    }, 100);
  });

  return (
    <div>
      <Typography>Pi Host</Typography>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
    </div>
  );
}
