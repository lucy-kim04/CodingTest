function solution(s) {
  const list = s.toLowerCase().split('');
  const a = list.filter(x => x === 'p').length;
  const b = list.filter(x => x === 'y').length;

  return a === b;
}
