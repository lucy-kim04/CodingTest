function solution(park, routes) {
    const h = park.length;
    const w = park[0].length;
    const map = park.map(row => row.split(''));

    // 방향 매핑 (상하좌우)
    const dir = {
        N: [-1, 0],
        S: [1, 0],
        W: [0, -1],
        E: [0, 1],
    };

    // 시작 위치 찾기
    let x = 0, y = 0;
    for (let i = 0; i < h; i++) {
        const j = map[i].indexOf('S');
        if (j !== -1) {
            x = i;
            y = j;
            break;
        }
    }

    for (const route of routes) {
        const [d, nStr] = route.split(' ');
        const n = Number(nStr);
        const [dx, dy] = dir[d];

        let nx = x;
        let ny = y;
        let canMove = true;

        for (let i = 1; i <= n; i++) {
            const tx = x + dx * i;
            const ty = y + dy * i;
            if (
                tx < 0 || tx >= h ||
                ty < 0 || ty >= w ||
                map[tx][ty] === 'X'
            ) {
                canMove = false;
                break;
            }
        }

        if (canMove) {
            x += dx * n;
            y += dy * n;
        }
    }

    return [x, y];
}
