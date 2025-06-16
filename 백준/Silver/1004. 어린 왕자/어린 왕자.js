const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);
let line = 1;
const answer = [];

for (let t = 0; t < T; t++) {
  const [x1, y1, x2, y2] = input[line++].split(' ').map(Number);
  const n = Number(input[line++]);
  let count = 0;

  for (let i = 0; i < n; i++) {
    const [cx, cy, r] = input[line++].split(' ').map(Number);

    const fromIn = (x1 - cx) ** 2 + (y1 - cy) ** 2 < r ** 2;
    const toIn = (x2 - cx) ** 2 + (y2 - cy) ** 2 < r ** 2;

    if (fromIn !== toIn) count++; // XOR
  }

  answer.push(count);
}

console.log(answer.join('\n'));
