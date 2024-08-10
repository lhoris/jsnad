function asyncOperation() {
    console.log("async operation");
    return "Hello Async";
}

async function main() {
    try {
        const result = await asyncOperation();
        console.log('Result:', result);
    } catch (err) {
        console.error('Error:', err);
    }
}
main();