function solution(arr) {
    const average = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
    return average;
}