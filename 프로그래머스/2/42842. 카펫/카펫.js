function solution(brown, yellow) {
    for(let i=1;i<brown;i++) {
        for(let j=1;j<=i;j++) {
            if(i*j==brown+yellow) {
                if((i-2)*(j-2)==yellow) {
                    return[i, j]
                }
            }
        }
    }
}