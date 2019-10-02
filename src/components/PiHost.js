import React, { useState, useEffect } from "react";
import openSocket from "socket.io-client";
import { Typography, Button } from "@material-ui/core";
import Webcam from "react-webcam";

const socket = openSocket("http://localhost:8000");

export default function PiHost() {
  useEffect(() => {
    socket.emit("hostIsReady");
  }, []);

  const webcamRef = React.useRef(null);
  const [snapshot, setSnapshot] = useState("");

  socket.on("retrieveImage", () => {
    capture();
    socket.emit("theImageFromHost", snapshot);
  });

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setSnapshot(imageSrc);
  }, [webcamRef]);

  return (
    <div>
      <Typography>This is Pi Host</Typography>
      <br></br>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <br></br>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "16px", marginBottom: "8px" }}
        onClick={capture}
      >
        Click Me
      </Button>
    </div>
  );
}
