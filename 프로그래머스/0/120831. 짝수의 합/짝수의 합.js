function solution(n) {
    const answer = [];
    for (let i = 0; i <= n / 2; i++) {
        answer.push(i * 2);
    }

    return answer.reduce((acc, cur) => acc + cur, 0);
}
