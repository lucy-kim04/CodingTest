function solution(phone_number) {
    const a = phone_number.length;
    let list = '*'.repeat(a - 4);                     // 앞부분 * 처리
    list += phone_number.slice(-4);                   // 뒷 4자리 붙이기
    return list;
}
