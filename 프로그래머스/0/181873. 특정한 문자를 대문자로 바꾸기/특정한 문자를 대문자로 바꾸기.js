function solution(my_string, alp) {
    return my_string
        .split('')
        .map(x => x === alp ? x.toUpperCase() : x)
        .join('');
}
