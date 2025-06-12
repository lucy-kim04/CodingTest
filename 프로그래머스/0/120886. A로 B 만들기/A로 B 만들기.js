function solution(before, after) {
    const list_a = before.split('').sort().join('')
    const list_b = after.split('').sort().join('')
    if(list_a === list_b) {
        return 1
    } else {
        return 0
    }
}