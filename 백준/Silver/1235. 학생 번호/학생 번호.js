const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const nums = input.slice(1); // 번호 리스트
const len = nums[0].length;

for (let k = 1; k <= len; k++) {
  const seen = new Set();
  for (let i = 0; i < N; i++) {
    const suffix = nums[i].slice(-k); // 뒤에서 k자리
    seen.add(suffix);
  }

  if (seen.size === N) {
    console.log(k);
    break;
  }
}
