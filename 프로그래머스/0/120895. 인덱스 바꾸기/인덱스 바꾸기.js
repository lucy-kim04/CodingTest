function solution(my_string, num1, num2) {
    const list = my_string.split('');
    const temp = list[num1];      // 먼저 저장해둠
    list[num1] = list[num2];
    list[num2] = temp;
    return list.join('');
}
