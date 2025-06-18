const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const board = input.slice(1);

// 비어 있는 행 세기
let rowCount = 0;
for (let i = 0; i < n; i++) {
  if (!board[i].includes('X')) rowCount++;
}

// 비어 있는 열 세기
let colCount = 0;
for (let j = 0; j < m; j++) {
  let safe = true;
  for (let i = 0; i < n; i++) {
    if (board[i][j] === 'X') {
      safe = false;
      break;
    }
  }
  if (safe) colCount++;
}

console.log(Math.max(rowCount, colCount));
