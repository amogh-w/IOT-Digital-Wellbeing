const io = require("socket.io")(8000);
console.log("listening on port 8000");

io.on("connection", client => {
  console.log("a client connected");

  client.on("checkStatusOfHost", () => {
    client.broadcast.emit("checkStatusOfHost");
  });

  client.on("checkStatusOfConnection", () => {
    client.broadcast.emit("checkStatusOfConnection");
  });
});
