function solution(my_string, n) {
    const list = my_string.split('');
    const repeated = list.map(char => char.repeat(n));
    return repeated.join('');
}
