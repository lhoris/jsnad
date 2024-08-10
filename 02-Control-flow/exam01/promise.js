function asyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Operation completed');
        }, 1000);
    });
}
  
asyncOperation()
    .then(result => console.log('Result:', result))
    .catch(err => console.error('Error:', err));