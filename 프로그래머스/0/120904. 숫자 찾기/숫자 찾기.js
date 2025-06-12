function solution(num, k) {
    const str = String(num);
    const index = str.indexOf(String(k));
    return index === -1 ? -1 : index + 1;
}
