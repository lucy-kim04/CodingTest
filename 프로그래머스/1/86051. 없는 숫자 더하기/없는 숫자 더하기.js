function solution(numbers) {
    const a = [0,1,2,3,4,5,6,7,8,9];
    var answer = 0;
    for(let i=0;i<a.length;i++) {
        if(numbers.includes(a[i])) {
            
        } else {
            answer += a[i]
        }
    }
    return answer
}