function solution(n) {
    const list = String(n).split('');
    var answer = [];
    for(let i=list.length-1;i>=0;i--) {
        answer.push(list[i]);
    }
    return answer.map(Number)
}