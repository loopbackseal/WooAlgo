function solution(n) {
    let answer = [];
    while (n / 10 >= 1) {
        answer.push(n % 10);
        n = Math.floor(n / 10);
    }
    answer.push(n);
    return answer;
}