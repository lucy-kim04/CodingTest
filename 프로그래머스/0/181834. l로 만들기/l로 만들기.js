function solution(myString) {
    const letters = ['a','b','c','d','e','f','g','h','i','j','k'];
    return myString
        .split('')
        .map(x => letters.includes(x) ? 'l' : x)
        .join('');
}
