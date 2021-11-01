function solution(n) {
    let answer = 0;
    let i = 1;
    while (i <= Math.pow(n,0.5)) {
        if (n % i == 0) {
            if (n / i == i) answer = answer + i;
            else answer = answer + i + n / i;
        }
        i++;
    }
    return answer;
}