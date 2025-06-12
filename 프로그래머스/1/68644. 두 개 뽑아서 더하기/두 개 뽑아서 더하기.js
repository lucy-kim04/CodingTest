function solution(numbers) {
    var answer = []
    for(let i=0;i<numbers.length;i++) {
        for(let j=0;j<i;j++) {
            if(j!==i) {
                answer.push(numbers[i]+numbers[j])
            }
        }
    }
    return [...new Set(answer)].sort((a,b)=>a-b)
}