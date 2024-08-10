const fs = require('fs');
const path = require('path');

const newDirPath = path.join(__dirname, 'new-directory');

// 동기적 디렉토리 생성
try {
  fs.mkdirSync(newDirPath);
  console.log('디렉토리가 생성되었습니다:', newDirPath);
} catch (err) {
  console.error('동기적 디렉토리 생성 에러:', err);
}

// 비동기적 디렉토리 생성
fs.mkdir(newDirPath, (err) => {
  if (err) {
    console.error('비동기적 디렉토리 생성 에러:', err);
    return;
  }
  console.log('디렉토리가 생성되었습니다:', newDirPath);
});