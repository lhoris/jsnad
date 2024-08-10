// Promise
const pm = Promise.reject(new Error("Promise Reject"));
pm.then(() => console.log("Never occur"))
  .catch((e) => console.error("Promise handler: There is an error in this promise"));