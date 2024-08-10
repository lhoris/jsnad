class CustomError extends Error {
  constructor(message, options) {
    super(message, options);
    this.name = "CustomError";
  }
}

const error = new Error("First Error");
const customError = new CustomError("Custom message", { cause: error });

console.error("custom error: ", customError);
console.log("----------------------------------------");