const net = require("node:net");

// Event emitter
const connection = net.connect("localhost");

connection.on("error", (err) => {
  console.error("Event emitter error:", err);
});

connection.pipe(process.stdout);