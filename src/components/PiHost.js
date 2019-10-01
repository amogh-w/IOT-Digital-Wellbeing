import React, { useState } from "react";
import openSocket from "socket.io-client";
import { Typography, TextField, Button } from "@material-ui/core";

const socket = openSocket("http://localhost:8000");

export default function PiHost() {
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [values, setValues] = useState({ message1: "", message2: "" });

  return (
    <div>
      <Typography>This is Pi Host</Typography>
      <TextField
        name="message1"
        label="MessageOne"
        margin="normal"
        value={values.message1}
        onChange={handleInputChange}
      ></TextField>
      <br></br>
      <TextField
        name="message2"
        label="MessageTwo"
        margin="normal"
        value={values.message2}
        onChange={handleInputChange}
      ></TextField>
      <br></br>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "16px", marginBottom: "8px" }}
        onClick={() => socket.emit("sendImage", values)}
      >
        Click Me
      </Button>
    </div>
  );
}
