function solution(n) {
    const a = n**(1/2);
    if(a===Math.floor(a)) {
        return((a+1)**2)
    } else {
        return -1
    }
}