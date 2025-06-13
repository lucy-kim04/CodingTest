function solution(n) {
    var list = [];
    if(n===0) {
        return 0
    } else {
        for(let i=1;i<=n;i++) {
        if(n%i===0) {
            list.push(i);
        }
    }
            return list.reduce((a,b)=>a+b)}

}