function solution(name, yearning, photo) {
    var score = {};
    var list = [];

    for (let i = 0; i < name.length; i++) {
        score[name[i]] = yearning[i];
    }

    for (let j = 0; j < photo.length; j++) {
        let sum = 0;
        for (let k = 0; k < photo[j].length; k++) {
            sum += score[photo[j][k]] || 0; // 없는 이름은 0점 처리
        }
        list.push(sum);
    }

    return list;
}
