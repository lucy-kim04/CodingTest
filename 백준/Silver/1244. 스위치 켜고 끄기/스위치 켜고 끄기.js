const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
let switches = input[1].split(' ').map(Number);
const students = input.slice(3).map(line => line.split(' ').map(Number));

// 남학생: 배수 뒤집기
// 여학생: 대칭 뒤집기

for (let [gender, num] of students) {
  if (gender === 1) {
    // 남학생: num의 배수 위치 toggle
    for (let i = num - 1; i < n; i += num) {
      switches[i] = 1 - switches[i];
    }
  } else {
    // 여학생: 대칭 검사
    let left = num - 2;
    let right = num;
    while (left >= 0 && right < n && switches[left] === switches[right]) {
      left--;
      right++;
    }
    for (let i = left + 1; i < right; i++) {
      switches[i] = 1 - switches[i];
    }
  }
}

// 출력: 한 줄에 20개씩
for (let i = 0; i < n; i++) {
  process.stdout.write(switches[i] + ' ');
  if ((i + 1) % 20 === 0) console.log();
}
