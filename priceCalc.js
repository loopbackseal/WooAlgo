function solution(price, money, count) {
    let answer = -money;
    let init = 1;
    while (init <= count) {
        answer = answer + price * init;
        init++;
    }
    if (answer < 0) answer = 0;
    return answer;
}