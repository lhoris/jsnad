function asyncOperation(callback) {
    setTimeout(() => {
        callback(null, 'Operation completed');
    }, 1000);
}
  
asyncOperation((err, result) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Result:', result);
    }
});