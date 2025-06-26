function solution(s) {
  const n = s.length;
  let minLength = n;

  for (let step = 1; step <= Math.floor(n / 2); step++) {
    let compressed = '';
    let prev = s.slice(0, step);
    let count = 1;

    for (let j = step; j < n; j += step) {
      const current = s.slice(j, j + step);
      if (current === prev) {
        count++;
      } else {
        compressed += (count > 1 ? count : '') + prev;
        prev = current;
        count = 1;
      }
    }

    compressed += (count > 1 ? count : '') + prev;

    minLength = Math.min(minLength, compressed.length);
  }

  return minLength;
}
