function solution(array, n) {
    return array
        .sort((a, b) => {
            const diffA = Math.abs(a - n);
            const diffB = Math.abs(b - n);

            if (diffA === diffB) return a - b; // 차이 같으면 더 작은 수
            return diffA - diffB;              // 차이 작은 수 우선
        })[0];
}
