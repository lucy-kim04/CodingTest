function solution(n) {
    const list = [];
    let i = 2;

    while (n > 1) {
        if (n % i === 0) {
            list.push(i);
            n = n / i;
        } else {
            i++;
        }
    }

    return [...new Set(list)];
}
