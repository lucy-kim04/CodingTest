function solution(answers) {
    const patterns = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    let a_score = 0
    let b_score = 0
    let c_score = 0
    for(let i=0;i<answers.length;i++) {
        if(patterns[0][i%5]===answers[i]) {
            a_score+=1
        }
    }
    for(let i=0;i<answers.length;i++) {
        if(patterns[1][i%8]===answers[i]) {
            b_score+=1
        }
    }
    for(let i=0;i<answers.length;i++) {
        if(patterns[2][i%10]===answers[i]) {
            c_score+=1
        }
    }
    
    let list = [a_score, b_score, c_score]
    const Max = Math.max(...list)
    
    return list.map((score,i)=>score===Max?i+1:null).filter(x=>x!==null)
}