function solution(n) {
    let answer = 0;
    let fibo = [];
    fibo[0] = 0;
    fibo[1] = 1;
    fibo[2] = 1;
    let i = 3;
    while (i <= n) {
        fibo[i] = fibo[i - 1] % 1234567 + fibo[i - 2] % 1234567;
        i++;
    }
    return fibo[n] % 1234567;
}