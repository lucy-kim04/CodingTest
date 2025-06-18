const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = input[0];
const b = input[1];
const c = input[2];

const resist = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

const value = (resist[a] * 10 + resist[b]) * (10 ** resist[c]);
console.log(value);
