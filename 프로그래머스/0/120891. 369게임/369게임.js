function solution(order) {
    var answer = 0
    const number = String(order)
    const list = number.split('')
    for(let i = 0; i<list.length;i++) {
        if(list[i]==='3') {
            answer +=1
        } else if(list[i]==='6') {
            answer +=1
        } else if (list[i]==='9') {
            answer +=1
        }
    }
    return answer
}