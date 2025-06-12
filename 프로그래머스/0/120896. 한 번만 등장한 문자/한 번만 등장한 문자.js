function solution(s) {
    return s.split('').filter(char => s.indexOf(char) === s.lastIndexOf(char)).sort().join('')    
}