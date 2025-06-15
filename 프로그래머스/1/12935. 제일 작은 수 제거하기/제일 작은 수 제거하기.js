function solution(arr) {
    const a = Math.min(...arr)
    return arr.filter(x=>x!==a).length>0?arr.filter(x=>x!==a):[-1]
}