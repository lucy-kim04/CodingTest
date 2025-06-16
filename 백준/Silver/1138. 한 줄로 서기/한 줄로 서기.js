//그니까 이게 예를들어 첫번째 수가 2야 그럼 1이 적어도 3번째에 있는거잖슴 그러니까 3번째에다가
//1을 박아넣고 그러고 나서 2를 보는데 어 얘가 1이래 그럼 3번째 아니면 2번째에 들어가야하잖아
//근데 3번째에 이미 1이 있음 그럼 2에 들어가
//3을 보는데 얘가 1이래 그럼 얘도 234 중 하나인데 자리가 빈게 4잖아 넣어

//그니까 자리에 들어갈 수 있는게 1은 무조건 0번에다가 그 수 더한 자리에 박아넣고
//2부터는 그 숫자자리 앞에 1이 있는지 확인하고 있으면 숫자자리+1에 넣고 아니면 숫자자리에 넣기
//3은 1이랑 2 확인하고 개수만큼 +해서 넣고 반복

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const list = input[1].trim().split(' ').map(Number);

const arr = Array(N).fill(0);

for (let i = 0; i < N; i++) {
  const taller = list[i]; // 왼쪽에 있어야 하는 큰 사람 수
  let count = 0;

  for (let j = 0; j < N; j++) {
    if (arr[j] === 0) {
      if (count === taller) {
        arr[j] = i + 1; // 키 작은 사람부터 번호 부여 (1부터)
        break;
      }
      count++;
    }
  }
}

console.log(arr.join(' '));
