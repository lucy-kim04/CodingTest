function solution(n) {
    let i = 1;
    let fact = 1;

    while (fact * (i + 1) <= n) {
        i++;
        fact *= i;
    }

    return i;
}
