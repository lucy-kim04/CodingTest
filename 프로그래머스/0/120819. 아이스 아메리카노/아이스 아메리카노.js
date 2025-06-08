function solution(money) {
    const coffee = Math.floor(money / 5500); // 커피 몇 잔
    const change = money % 5500;             // 잔돈
    return [coffee, change];
}
