function solution(schedules, timelogs, startday) {
    let answer = 0;

    for (let i = 0; i < schedules.length; i++) {
        let deadline = schedules[i] + 10;
        if (deadline % 100 >= 60) {
            deadline += 40; // 분이 60 넘는 경우 → 시간 1 증가 + 분 0으로 정리
        }
        if (deadline >= 2400) {
            deadline -= 2400;
        }

        let count = 0;
        let checked = 0;

        for (let j = 0; checked < 5 && j < 7; j++) {
            const weekday = (startday + j - 1) % 7; // 0:월 ~ 6:일

            if (weekday < 5) { // 월~금만
                if (timelogs[i][(j % 7)] <= deadline) {
                    count++;
                }
                checked++;
            }
        }

        if (count === 5) answer++;
    }

    return answer;
}
