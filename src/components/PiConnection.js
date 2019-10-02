import React, { useState, useEffect } from "react";
import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");

export default function PiConnection() {
  useEffect(() => {
    socket.on("checkStatusOfConnection", () => {
      console.log("Connection is Fine");
    });
  }, []);

  return (
    <div>
      <button onClick={() => socket.emit("checkStatusOfHost")}></button>
    </div>
  );
}
