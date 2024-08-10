const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

// 동기적 파일 정보 확인
try {
  const stats = fs.statSync(filePath);
  console.log('파일 경로:', filePath);
  console.log('파일 크기:', stats.size);
  console.log('디렉토리인가?', stats.isDirectory());
  console.log('파일인가?', stats.isFile());
} catch (err) {
  console.error('동기적 파일 정보 확인 에러:', err);
}

// 비동기적 파일 정보 확인
fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error('비동기적 파일 정보 확인 에러:', err);
    return;
  }
  console.log('파일 경로:', filePath);
  console.log('파일 크기:', stats.size);
  console.log('디렉토리인가?', stats.isDirectory());
  console.log('파일인가?', stats.isFile());
});