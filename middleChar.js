function solution(s) {
    let answer = '';
    let len = s.length;
    if (len % 2 == 0) {
        answer = s[Math.floor(len/2) - 1] + s[Math.floor(len/2)];
    } else {
        answer = s[Math.floor(len/2)];
    }
    return answer;
}