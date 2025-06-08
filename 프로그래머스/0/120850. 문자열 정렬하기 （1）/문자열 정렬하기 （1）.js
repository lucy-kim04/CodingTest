function solution(my_string) {
    const list = my_string.split('');
    const answer = list.filter(x => !isNaN(x) && x !== ' ').map(Number).sort((a,b)=>a-b);
    return answer;
}
