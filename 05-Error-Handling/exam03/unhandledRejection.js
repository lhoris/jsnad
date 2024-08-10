process.on("unhandledRejection", (e) => {
  console.error("Unhandled rejection:", e);
});


const pm = Promise.reject(new Error("Async Error"));
pm.then(() => console.log("Never occur"));