import React, { useEffect, useState } from "react";
import openSocket from "socket.io-client";
import { Typography, Button } from "@material-ui/core";

const socket = openSocket("http://localhost:8000");

export default function PiConnection() {
  useEffect(() => {
    socket.on("hostIsReady", () => {
      setHostAlive(true);
    });
    socket.on("imageTaken", snapshot => {
      setReceivedImage(snapshot);
    });
  }, []);

  const [hostAlive, setHostAlive] = useState(false);
  const [receivedImage, setReceivedImage] = useState("");

  return (
    <div>
      {hostAlive ? (
        <React.Fragment>
          <Typography>Pi Connection: Successful</Typography>
          <Button onClick={() => socket.emit("getImageRequest")}>
            Start Streaming
          </Button>

          <Typography>Live Feed from Pi</Typography>
          <img src={`${receivedImage}`}></img>
        </React.Fragment>
      ) : (
        <Typography>Pi Connection: Failed</Typography>
      )}
    </div>
  );
}
