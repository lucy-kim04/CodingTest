function solution(food) {
    var result = [0];
    for(let i=food.length-1;i>=1;i--) {
        var n=Math.floor(food[i]/2);
        for(let j=n;j>=1;j--) {
            result.push(i);
            result.unshift(i);
        }
       
    }
     return result.join('')
}