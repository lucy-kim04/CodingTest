function solution(my_string) {
    const list = my_string.split('')
    const answer = [...new Set(list)]
    return answer.join('');
}