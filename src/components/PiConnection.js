import React, { useState } from "react";
import openSocket from "socket.io-client";
import { Typography, Button } from "@material-ui/core";

const socket = openSocket("http://localhost:8000");

export default function PiConnection() {
  const [receivedMessage, setReceivedMessage] = useState(null);
  socket.on("sendImageValues", values => {
    setReceivedMessage(values);
    console.log(values.message1, values.message2);
  });
  return (
    <div>
      {receivedMessage ? (
        <Typography>
          You have few messages, first is {receivedMessage.message1} and second
          is {receivedMessage.message2}
        </Typography>
      ) : (
        <Typography>Waiting for messages...</Typography>
      )}
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "16px", marginBottom: "8px" }}
        onClick={() => socket.emit("grabImage")}
      >
        Click Me
      </Button>
    </div>
  );
}
