function solution(n) {
    let answer = 0;
    while (n / 10 >= 1) {
        answer = answer + n % 10;
        n = Math.floor(n / 10);
    }
    answer = answer + n;
    return answer;
}