const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const vote = input.slice(1, N + 1).map(Number);

let count = 0;

if (N === 1) {
  console.log(0);
} else {
  while (true) {
    const maxVote = Math.max(...vote.slice(1)); // 1번 제외한 최대
    if (vote[0] > maxVote) break;

    const maxIdx = vote.findIndex((v, i) => i !== 0 && v === maxVote);

    vote[maxIdx] -= 1;
    vote[0] += 1;
    count++;
  }

  console.log(count);
}
