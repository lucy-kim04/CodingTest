const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

var count = 0;

for (let i = 0; i < 8; i++) {
  if (i % 2 === 0) {
    for (let j = 0; j < 8; j++) {
      if (j % 2 === 0 && input[i][j] === 'F') {
        count += 1;
      }
    }
  } else {
    for (let k = 0; k < 8; k++) {
      if (k % 2 === 1 && input[i][k] === 'F') {
        count += 1;
      }
    }
  }
}

console.log(count);
