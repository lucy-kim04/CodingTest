const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, s, P] = input[0].split(' ').map(Number);
const scores = input[1] ? input[1].split(' ').map(Number) : [];

if (N === P && scores[N - 1] >= s) {
  console.log(-1);
} else {
  scores.push(s);
  scores.sort((a, b) => b - a);

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === s) {
      console.log(i + 1);
      break;
    }
  }
}
