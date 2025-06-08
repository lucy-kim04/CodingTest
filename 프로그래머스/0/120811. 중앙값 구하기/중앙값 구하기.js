function solution(array) {
    const x = array.sort((a,b)=>b-a);
    return x[(x.length-1)/2]
}