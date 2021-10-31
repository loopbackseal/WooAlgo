function solution(s) {
    let answer = true;
    if (s.length == 4 || s.length == 6) {
        if (s.search(/[^0-9]/g) != -1) answer = false;
    } else answer = false;
    return answer;
}