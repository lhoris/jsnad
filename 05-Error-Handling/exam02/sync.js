// Sync
try {
  throw new Error("try catch sync handler");
} catch (e) {
  console.error("Try catch handler:", e);
}