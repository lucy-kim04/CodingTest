function solution(binomial) {
    const list = binomial.split(' ');
    const a = Number(list[0]);
    const b = Number(list[2]);
    if(list[1]==='+') {
        return a+b
    } else if(list[1]==='-') {
        return a-b
    } else {
        return a*b
    }
    return a
}