const fs = require('fs');
const [N, K] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const queue = Array.from({ length: N }, (_, i) => i + 1);
const result = [];

let idx = 0;

while (queue.length) {
  for (let i = 0; i < K - 1; i++) {
    queue.push(queue.shift());
  }
  result.push(queue.shift());
}

console.log(`<${result.join(', ')}>`);
