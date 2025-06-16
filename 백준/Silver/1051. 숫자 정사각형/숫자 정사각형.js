const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const grid = input.slice(1).map((line) => line.split(''));

let maxSize = 1; // 최소 한 글자는 항상 정사각형

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    // 가능한 정사각형 최대 크기까지 시도
    for (let size = 1; i + size < N && j + size < M; size++) {
      const a = grid[i][j];
      const b = grid[i][j + size];
      const c = grid[i + size][j];
      const d = grid[i + size][j + size];
      if (a === b && b === c && c === d) {
        maxSize = Math.max(maxSize, size + 1); // size는 0부터 시작
      }
    }
  }
}

console.log(maxSize * maxSize);
