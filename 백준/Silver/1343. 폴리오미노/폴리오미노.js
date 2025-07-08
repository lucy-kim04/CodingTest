const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('.');

const result = [];

for (let i = 0; i < input.length; i++) {
  const xBlock = input[i].length;

  if (xBlock === 0) {
    result.push('');
    continue;
  }

  if (xBlock % 2 !== 0) {
    console.log(-1);
    process.exit(0);
  }

  let a = 'AAAA'.repeat(Math.floor(xBlock / 4));
  a += 'BB'.repeat((xBlock % 4) / 2); // 남은 2는 BB로 채움
  result.push(a);
}


console.log(result.join('.'));
