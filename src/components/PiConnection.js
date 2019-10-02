import React, { useState } from "react";
import openSocket from "socket.io-client";
import { Typography, Button, Divider } from "@material-ui/core";

const socket = openSocket("http://localhost:8000");

export default function PiConnection() {
  const [connectionStatus, setConnectionStatus] = useState(false);
  const [receivedImage, setReceivedImage] = useState(null);

  socket.on("hostIsReadyForConnection", () => {
    setConnectionStatus(true);
  });

  socket.on("theImageToConnection", snapshot => {
    setReceivedImage(snapshot);
  });

  const getImage = () => {
    socket.emit("askingForImage");
    setReceivedImage(null);
  };

  const DisplayImage = ({ base64string }) => {
    return <img src={`${base64string}`} alt="imageFromPi"></img>;
  };

  return (
    <div>
      {connectionStatus ? (
        <Typography>Connection Status: Connected</Typography>
      ) : (
        <Typography>Connection Status: Disconnected</Typography>
      )}
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "16px", marginBottom: "8px" }}
        onClick={getImage}
      >
        Get Image
      </Button>
      <Divider></Divider>
      {receivedImage ? (
        <DisplayImage base64string={receivedImage}></DisplayImage>
      ) : (
        <Typography>Click the get image button</Typography>
      )}
    </div>
  );
}
