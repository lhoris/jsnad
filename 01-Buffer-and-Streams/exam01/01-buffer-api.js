// https://www.w3schools.com/nodejs/ref_buffer.asp
// 1. new Buffer
var buf1 = Buffer.from('Required. An object to fill the buffer with.');
console.log(buf1);

var buf2 = Buffer.from('Required. An object to fill the buffer with.', 'utf-8');
console.log(buf2);

console.log(buf2.toString('utf-8'));
console.log(buf2.toString('base64'));
console.log(buf2.toString('ascii'));
console.log(buf2.toString('hex'));

// 2. Allocate new buffer
var buf3 = Buffer.alloc(10);
console.log(buf3);
var buf3 = Buffer.alloc(15, 'preload string. but this is not print');
console.log(buf3.toString());

var buf4 = Buffer.allocUnsafe(10);
console.log(buf4);
console.log(buf4.toString());
