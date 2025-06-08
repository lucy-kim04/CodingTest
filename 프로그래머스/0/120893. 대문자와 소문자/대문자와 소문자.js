function solution(my_string) {
    const list = my_string.split('')
    let result = ''
    for(let i=0;i<list.length;i++) {
        if(list[i]===list[i].toUpperCase()) {
            result += list[i].toLowerCase()
        } else {
            result += list[i].toUpperCase()
        }
    }
    return result;
}