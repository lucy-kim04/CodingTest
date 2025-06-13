function solution(myString) {
    let answer = '';
    for (let i = 0; i < myString.length; i++) {
        const ch = myString[i];
        if (ch === 'a') {
            answer += 'A';
        } else if (ch === 'A') {
            answer += 'A';
        } else {
            answer += ch.toLowerCase();
        }
    }
    return answer;
}
