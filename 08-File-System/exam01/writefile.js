const fs = require('fs');
const path = require('path');

const content = '이것은 파일에 쓰여질 내용입니다.';
const outputPath = path.join(__dirname, 'output.txt');

// 동기적 쓰기
try {
  fs.writeFileSync(outputPath, content);
  console.log('파일이 성공적으로 작성되었습니다:', outputPath);
} catch (err) {
  console.error('동기적 쓰기 에러:', err);
}

// 비동기적 쓰기
fs.writeFile(outputPath, content, (err) => {
  if (err) {
    console.error('비동기적 쓰기 에러:', err);
    return;
  }
  console.log('파일이 성공적으로 작성되었습니다:', outputPath);
});