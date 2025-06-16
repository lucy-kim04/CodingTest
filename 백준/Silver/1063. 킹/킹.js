const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [kingPos, stonePos, N] = input[0].split(' ');
const commands = input.slice(1);

const dirMap = {
  R: [1, 0],
  L: [-1, 0],
  B: [0, 1],
  T: [0, -1],
  RT: [1, -1],
  LT: [-1, -1],
  RB: [1, 1],
  LB: [-1, 1],
};

function toCoord(pos) {
  const col = pos.charCodeAt(0) - 'A'.charCodeAt(0);
  const row = 8 - Number(pos[1]);
  return [col, row];
}

function toPos(x, y) {
  return String.fromCharCode(x + 65) + (8 - y);
}

let [kx, ky] = toCoord(kingPos);
let [sx, sy] = toCoord(stonePos);

for (let cmd of commands) {
  const [dx, dy] = dirMap[cmd];
  const nkx = kx + dx;
  const nky = ky + dy;

  // 킹이 범위 안이면
  if (nkx >= 0 && nkx < 8 && nky >= 0 && nky < 8) {
    // 킹의 이동 위치에 돌이 있는 경우
    if (nkx === sx && nky === sy) {
      const nsx = sx + dx;
      const nsy = sy + dy;

      // 돌도 같이 움직일 수 있어야 함
      if (nsx >= 0 && nsx < 8 && nsy >= 0 && nsy < 8) {
        kx = nkx;
        ky = nky;
        sx = nsx;
        sy = nsy;
      }
    } else {
      // 돌이 없으면 킹만 이동
      kx = nkx;
      ky = nky;
    }
  }
}

console.log(toPos(kx, ky));
console.log(toPos(sx, sy));
