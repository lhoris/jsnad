process.on("uncaughtException", (error, origin) => {
  console.error("Unhandled exception:", error);
  console.error("Origin:", origin);
});



throw new Error("Sync Error");