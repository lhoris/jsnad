const fs = require('fs');
const path = require('path');

// 현재 스크립트 파일의 디렉토리 경로
console.log('현재 디렉토리:', __dirname);

// 현재 스크립트 파일의 전체 경로
console.log('현재 파일:', __filename);

// 상대 경로로 파일 읽기
const relativePath = path.join(__dirname, 'example.txt');

fs.readFile(relativePath, 'utf8', (err, data) => {
  if (err) {
    console.error('파일 읽기 에러:', err);
    return;
  }
  console.log('파일 내용:', data);
});