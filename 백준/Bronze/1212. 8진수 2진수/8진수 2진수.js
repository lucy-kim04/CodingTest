const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim(); // 8진수 문자열

let binary = '';

for (let i = 0; i < input.length; i++) {
  const digit = Number(input[i]); // 각 자릿수 (0~7)

  // 각 8진수 자리 → 3자리 2진수로 변환
  let bin = digit.toString(2); // 2진수로 변환
  if (i !== 0) bin = bin.padStart(3, '0'); // 앞에 0 채움 (맨 앞 숫자는 생략 가능)

  binary += bin;
}

console.log(binary);
