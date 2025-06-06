function solution(my_string) {
    const ans = ['a', 'e', 'i', 'o', 'u']
    const answer = my_string.split('')
    var list = answer.filter(word => !ans.includes(word))
    return list.join('')
}