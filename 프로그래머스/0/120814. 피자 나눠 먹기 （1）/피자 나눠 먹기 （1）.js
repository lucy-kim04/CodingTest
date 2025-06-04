function solution(n) {
    var answer=Math.floor(n/7)+(n%7===0?0:1)
    return answer
}