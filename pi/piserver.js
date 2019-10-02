const io = require("socket.io")(8000);

console.log("listening on port 8000");

io.on("connection", client => {
  console.log("Something Connected");
  client.on("hostIsReady", () => {
    client.broadcast.emit("hostIsReadyForConnection");
  });
  client.on("askingForImage", () => {
    client.broadcast.emit("retrieveImage");
  });
  client.on("theImageFromHost", snapshot => {
    client.broadcast.emit("theImageToConnection", snapshot);
  });
});
