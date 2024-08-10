const fs = require("fs");

// Async Await
(async () => {
  let data;
  try {
    data = await fs.promises.readFile("a file that does not exist");
  } catch (err) {
    console.error(
      "Async Await handler: There was an error reading the file!",
      err
    );
    return;
  }
})();