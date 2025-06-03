function solution(n) {
    const isPerfectSquare = Number.isInteger(Math.sqrt(n));
    const answer = isPerfectSquare ? 1 : 2;
    return answer;
}
