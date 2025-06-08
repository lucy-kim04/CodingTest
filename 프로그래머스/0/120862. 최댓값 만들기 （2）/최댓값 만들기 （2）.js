function solution(numbers) {
    const list = numbers.sort((a,b)=>a-b)
    const x = list.length
    return Math.max((list[0]*list[1]), (list[x-1]*list[x-2]))
}