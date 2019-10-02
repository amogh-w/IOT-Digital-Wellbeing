import React, { useState, useEffect } from "react";
import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");

export default function PiHost() {
  useEffect(() => {
    socket.on("checkStatusOfHost", () => {
      console.log("Host is Fine");
    });
  }, []);

  return (
    <div>
      <button onClick={() => socket.emit("checkStatusOfConnection")}></button>
    </div>
  );
}
