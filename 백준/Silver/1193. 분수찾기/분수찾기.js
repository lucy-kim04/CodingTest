const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
let n = Number(input);

// 줄 번호(line) 찾기
let line = 1;
while (n > (line * (line + 1)) / 2) {
  line++;
}

// 해당 줄에서 몇 번째인지 계산
const totalBefore = (line * (line - 1)) / 2;
const indexInLine = n - totalBefore;

let a, b;
if (line % 2 === 0) {
  a = indexInLine;
  b = line - indexInLine + 1;
} else {
  a = line - indexInLine + 1;
  b = indexInLine;
}

console.log(`${a}/${b}`);
