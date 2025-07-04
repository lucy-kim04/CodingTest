function solution(enroll, referral, seller, amount) {
    const result = Array(enroll.length).fill(0);
    const nameToIndex = new Map();

    for (let i = 0; i < enroll.length; i++) {
        nameToIndex.set(enroll[i], i);
    }

    for (let i = 0; i < seller.length; i++) {
        let person = seller[i];
        let money = amount[i] * 100;

        while (person !== '-') {
            const idx = nameToIndex.get(person);
            const commission = Math.floor(money * 0.1);
            result[idx] += money - commission;

            if (commission < 1) break;

            person = referral[idx];
            money = commission;
        }
    }

    return result;
}
