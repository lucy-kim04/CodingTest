function solution(n) {
    for (let i=1;i<=(n*6);i++) {
        if((i*6)%n===0) {
            return i
        }
    }
}