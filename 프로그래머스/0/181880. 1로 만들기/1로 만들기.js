function solution(num_list) {
    let k=0;
    for(let i=0;i<num_list.length;i++) {
        let x= num_list[i]
        while(x!==1) {
            x = Math.floor(x/2)
            k++
        }
    }
    return k
} 