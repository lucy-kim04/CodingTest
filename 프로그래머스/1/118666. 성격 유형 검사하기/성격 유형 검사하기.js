function solution(survey, choices) {
    const types = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];
    const scores = {};
    for (const type of types) scores[type] = 0;

    for (let i = 0; i < survey.length; i++) {
        const [disagree, agree] = survey[i];
        const choice = choices[i];

        if (choice < 4) {
            scores[disagree] += 4 - choice;
        } else if (choice > 4) {
            scores[agree] += choice - 4;
        }
        // choice === 4면 점수 없음
    }

    let result = '';
    result += scores['R'] >= scores['T'] ? 'R' : 'T';
    result += scores['C'] >= scores['F'] ? 'C' : 'F';
    result += scores['J'] >= scores['M'] ? 'J' : 'M';
    result += scores['A'] >= scores['N'] ? 'A' : 'N';

    return result;
}
