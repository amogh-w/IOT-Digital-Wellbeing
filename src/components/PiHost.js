import React from "react";
import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:8000");

export default function PiConnection() {
  return (
    <div>
      <p>This is Pi Host</p>
      <button onClick={() => socket.emit("mangoh")}>Click Me</button>
    </div>
  );
}
