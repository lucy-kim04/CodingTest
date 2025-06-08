function solution(cipher, code) {
    const list = cipher.split('')
    var answer = []
    for(let i=0;i<Math.floor(list.length/code);i++){
        answer.push(list[(i+1)*code -1]);
    }
    return answer.join('')
}