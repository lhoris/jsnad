const fs = require("fs");

// Callback
fs.readFile("a file that does not exist", (err, data) => {
  if (err) {
    console.error(
      "Callback handler: There was an error reading the file!",
      err
    );
    return;
  }
  // Otherwise handle the data
});