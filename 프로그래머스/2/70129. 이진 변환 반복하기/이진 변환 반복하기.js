function solution(s) {
    let count = 0;
    let stage = 0;

    while (s !== '1') {
        const zeroCount = s.split('').filter(x => x === '0').length;
        count += zeroCount;

        s = s.replace(/0/g, '');
        s = s.length.toString(2);

        stage += 1;
    }

    return [stage, count];
}
