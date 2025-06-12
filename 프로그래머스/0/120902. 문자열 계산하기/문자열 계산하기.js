function solution(my_string) {
    const tokens = my_string.split(' ');
    let result = Number(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const number = Number(tokens[i + 1]);

        if (operator === '+') {
            result += number;
        } else if (operator === '-') {
            result -= number;
        }
    }

    return result;
}
