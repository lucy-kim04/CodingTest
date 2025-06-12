function solution(my_string) {
    const numbers = my_string.match(/\d+/g) || [];
    return numbers.map(Number).reduce((acc, cur) => acc + cur, 0);
}
