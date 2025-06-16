function solution(s) {
    var list = s.split(' ');
    for (let i = 0; i < list.length; i++) {
        if (list[i] === '') continue; // 공백이 여러 개일 때 처리
        let x = list[i].split('');
        x[0] = x[0].toUpperCase();
        for (let j = 1; j < x.length; j++) {
            x[j] = x[j].toLowerCase();
        }
        list[i] = x.join('');
    }
    return list.join(' ');
}
