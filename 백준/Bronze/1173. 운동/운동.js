const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [X, M, T, A, R] = input;

if (M + A > T) {
  console.log(-1);
  return;
}

let time = 0;
let pulse = M;
let workout = 0;

while (workout < X) {
  if (pulse + A <= T) {
    pulse += A;
    workout++;
  } else {
    pulse -= R;
    if (pulse < M) pulse = M;
  }
  time++;
}

console.log(time);
