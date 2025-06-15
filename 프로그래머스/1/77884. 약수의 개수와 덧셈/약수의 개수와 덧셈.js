function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        let a = 0; // 매 반복마다 초기화
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                a += 1;
            }
        }
        if (a % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }
    }
    return answer;
}
