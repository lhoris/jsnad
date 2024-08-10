const fs = require('fs');
const path = require('path');

// 읽기 스트림 생성
const readStream = fs.createReadStream(path.join(__dirname, 'input.txt'));

// 쓰기 스트림 생성
const writeStream = fs.createWriteStream(path.join(__dirname, 'output.txt'));

// 파이핑: 읽기 스트림의 데이터를 쓰기 스트림으로 전달
readStream.pipe(writeStream);

readStream.on('data', (chunk) => {
  console.log('데이터 청크:', chunk.toString());
});

readStream.on('end', () => {
  console.log('읽기 완료');
});

writeStream.on('finish', () => {
  console.log('쓰기 완료');
});