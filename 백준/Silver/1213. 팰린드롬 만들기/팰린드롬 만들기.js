const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const count = Array(26).fill(0);

// 각 알파벳 개수 세기
for (let i = 0; i < input.length; i++) {
  const idx = input[i].charCodeAt(0) - 65;
  count[idx]++;
}

// 홀수 개수 세기
let oddCount = 0;
let oddChar = '';
for (let i = 0; i < 26; i++) {
  if (count[i] % 2 === 1) {
    oddCount++;
    oddChar = String.fromCharCode(i + 65);
  }
}

if (oddCount > 1) {
  console.log("I'm Sorry Hansoo");
  return;
}

// 앞 절반 만들기
let half = '';
for (let i = 0; i < 26; i++) {
  half += String.fromCharCode(i + 65).repeat(Math.floor(count[i] / 2));
}

// 팰린드롬 완성
const result = half + (oddChar ? oddChar : '') + [...half].reverse().join('');
console.log(result);
