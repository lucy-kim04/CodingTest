function solution(age) {
    let answer = '';
    const base = 'a'.charCodeAt(0); // 97

    const digits = String(age).split('');
    for (let i = 0; i < digits.length; i++) {
        const code = base + Number(digits[i]);
        answer += String.fromCharCode(code);
    }

    return answer;
}
