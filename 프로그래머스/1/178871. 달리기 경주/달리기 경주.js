function solution(players, callings) {
    const indexMap = new Map();

    // 이름 → 현재 인덱스 매핑
    players.forEach((name, idx) => {
        indexMap.set(name, idx);
    });

    for (let name of callings) {
        const curIdx = indexMap.get(name);
        const frontName = players[curIdx - 1];

        // swap
        players[curIdx - 1] = name;
        players[curIdx] = frontName;

        // indexMap도 업데이트
        indexMap.set(name, curIdx - 1);
        indexMap.set(frontName, curIdx);
    }

    return players;
}
