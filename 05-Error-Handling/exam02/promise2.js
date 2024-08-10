Promise.reject(new Error("Error"))
       .then(() => console.log("never occur1"));
console.log("never occur2");