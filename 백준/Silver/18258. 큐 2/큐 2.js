const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const commands = input.slice(1);

const queue = [];
let head = 0;
const output = [];

const func = {
  pop: () => {
    if (head === queue.length) return -1;
    return queue[head++];
  },
  size: () => queue.length - head,
  empty: () => (head === queue.length ? 1 : 0),
  front: () => (head === queue.length ? -1 : queue[head]),
  back: () => (head === queue.length ? -1 : queue[queue.length - 1]),
};

for (let i = 0; i < N; i++) {
  const [cmd, val] = commands[i].split(' ');

  if (cmd === 'push') {
    queue.push(Number(val));
  } else {
    output.push(func[cmd]());
  }
}

console.log(output.join('\n'));
