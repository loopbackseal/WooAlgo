function solution(s) {
    let answer = 0;
    let len = s.length;
    let init = 0;
    if (s[0] == "+" || s[0] == "-") init++;
    while (init < len) {
        answer = answer + s[init] * Math.pow(10, len - init - 1);
        init++;
    }
    if (s[0] == "-") answer = -answer;
    return answer;
}