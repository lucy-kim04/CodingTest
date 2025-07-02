function solution(x) {
    let y = x
    y = x.toLowerCase()
    y = y.replace(/[^a-zA-Z0-9._-]/g, '')
    y = y.replace(/\.{2,}/g, '.')
    y = y.replace(/^\.|\.$/g, '');
    if(y.length === 0) {
        y = 'a'
    } else if(y.length >=16) {
        if(y[14]==='.') {
            y= y.slice(0, 14)
        } else {
            y = y.slice(0,15)
        }
    }

    if(y.length<=2) {
        const b = y[y.length -1]
        const c = 3-y.length
        for(let i=1;i<=c; i++) {
            y+=b
        }
    }
    return y
}