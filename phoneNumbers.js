function solution(phoneNumber) {
    let answer = '';
    let len = phoneNumber.length - 4;
    let i = 0;
    while (i < len) {
        answer = answer + "*";
        i++;
    }
    while (len < phoneNumber.length) {
        answer = answer + phoneNumber[len];
        len++;
    }
    return answer;
}