function solution(numbers, direction) {
    var answer = [];
    const len = numbers.length
    if(direction === "right") {
        answer.push(numbers[len-1])
        for(let i = 0; i<len-1;i++) {
            answer.push(numbers[i])
        }
    } else {
        for(let i = 1; i<len;i++) {
            answer.push(numbers[i])
        }
        answer.push(numbers[0])
    }
    return answer;
    
}