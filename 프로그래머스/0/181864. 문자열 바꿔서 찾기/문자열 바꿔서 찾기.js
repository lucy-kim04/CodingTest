function solution(myString, pat) {
    const letter = myString.split('').map(x=>x==='A'?'B':'A').join('');
    if(letter.includes(pat)) {
        return 1
    } else {
        return 0
    }
}