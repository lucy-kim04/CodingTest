function solution(s) {
    var answer = 0
    const list = s.split(' ')
    for(let i=0;i<list.length;i++) {
        if(list[i]==='Z') {
            answer -= Number(list[i-1])
        } else {
            answer += Number(list[i])
        }
    }
    return answer;
}