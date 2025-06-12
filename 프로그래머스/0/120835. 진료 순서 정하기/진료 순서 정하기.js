function solution(emergency) {
    var answer = []
    const list = [...emergency].sort((a, b)=> b-a)
    for(let i=0;i<emergency.length;i++){
        for(let j=0;j<emergency.length; j++) {
            if(emergency[i]===list[j]) {
                answer.push(j+1)
            }
        }
    }
    return answer
}