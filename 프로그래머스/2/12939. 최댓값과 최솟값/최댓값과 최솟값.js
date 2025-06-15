function solution(s) {
    const list = s.split(' ').map(Number);
    const a = Math.min(...list);
    const b = Math.max(...list)
    return [a,b].join(' ')
}