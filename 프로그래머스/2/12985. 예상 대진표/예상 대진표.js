function solution(n,a,b)
{
    let i =1
    while (a!==b) {
        
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
        i++
    }
    return i-1
}