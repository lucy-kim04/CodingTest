function solution(absolutes, signs) {
    var list = [];
    var answer = 0;
    for(let i=0;i<absolutes.length;i++) {
        if(signs[i]) {
            list.push(absolutes[i])
        } else {
            list.push(Number(absolutes[i])*(-1))
        }
    }
    for(let j=0;j<absolutes.length;j++) {
        answer += list[j]
    }
    return answer
}