function solution(n) {
    let answer = 0;

    for (let i = 1; i <= n; i++) {
        let count = 0;  // 이 자리에서 초기화
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                count += 1;
            }
        }
        if (count >= 3) {
            answer += 1;
        }
    }

    return answer;
}
