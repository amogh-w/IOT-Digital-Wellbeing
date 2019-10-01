const io = require("socket.io")(8000);

console.log("listening on port 8000");

io.on("connection", client => {
  console.log("Something Connected");
  client.on("grabImage", () => {
    console.log("Request to GrabImage");
  });
  client.on("sendImage", values => {
    client.broadcast.emit("sendImageValues", values);
  });
});
