function solution(my_string) {
    const list = my_string.split('');
    let number = list
        .filter(x => !isNaN(x) && x !== ' ')
        .map(Number)
        .reduce((acc, cur) => acc + cur, 0);
    return number;
}
