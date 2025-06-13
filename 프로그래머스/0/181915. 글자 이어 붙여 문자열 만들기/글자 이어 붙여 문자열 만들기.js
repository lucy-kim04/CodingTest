function solution(my_string, index_list) {
    const list = my_string.split('')
    var answer = ''
    for(let i=0;i<index_list.length;i++) {
            answer+=list[index_list[i]]
    }

    return answer
}