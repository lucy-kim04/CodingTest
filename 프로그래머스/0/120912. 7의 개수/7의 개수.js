function solution(array) {
    const number = array.join('')
    return number.split('').filter(x=>x==='7').length
}