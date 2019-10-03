const io = require("socket.io")(8000);
console.log("listening on port 8000");

io.on("connection", client => {
  console.log("a client connected");

  client.on("hostIsReady", () => {
    client.broadcast.emit("hostIsReady");
  });

  client.on("getImageRequest", () => {
    client.broadcast.emit("getImageRequest");
  });

  client.on("imageTaken", snapshot => {
    client.broadcast.emit("imageTaken", snapshot);
  });
});
