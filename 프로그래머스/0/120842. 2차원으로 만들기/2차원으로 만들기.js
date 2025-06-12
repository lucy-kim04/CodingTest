function solution(num_list, n) {
    const answer = [];
    for (let i = 0; i < num_list.length / n; i++) {
        const set = [];
        for (let j = 0; j < n; j++) {
            set.push(num_list[i * n + j]);
        }
        answer.push(set);
    }
    return answer;
}
