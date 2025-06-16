const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
let answer = [];

for (let i = 1; i <= n; i++) {
  const [x1, y1, r1, x2, y2, r2] = input[i].split(' ').map(Number);

  const dx = x1 - x2;
  const dy = y1 - y2;
  const d = Math.sqrt(dx * dx + dy * dy); // 중심 사이 거리

  if (d === 0 && r1 === r2) {
    answer.push(-1); // 동일한 원
  } else if (d === r1 + r2 || d === Math.abs(r1 - r2)) {
    answer.push(1); // 외접 or 내접
  } else if (Math.abs(r1 - r2) < d && d < r1 + r2) {
    answer.push(2); // 두 점에서 만남
  } else {
    answer.push(0); // 안 만남
  }
}

console.log(answer.join('\n'));
