function solution(i, j, k) {
    let str = '';
    for (let n = i; n <= j; n++) {
        str += n;
    }
    return str.split('').filter(ch => ch === String(k)).length;
}
