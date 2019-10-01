const io = require("socket.io")(8000);

console.log("listening on port 8000");

io.on("connection", client => {
  console.log("Someone Connected");
  client.on("mangoc", () => {
    console.log("MangoC Received");
  });
  client.on("mangoh", () => {
    console.log("MangoH Received");
  });
});
