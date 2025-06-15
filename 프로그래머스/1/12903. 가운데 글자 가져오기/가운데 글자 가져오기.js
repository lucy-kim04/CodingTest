function solution(s) {
    const mid = Math.floor(s.length / 2);
    if (s.length % 2 === 0) {
        return s.slice(mid - 1, mid + 1);
    } else {
        return s.slice(mid, mid + 1);
    }
}
