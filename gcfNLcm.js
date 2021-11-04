function solution(n, m) {
    let answer = [];
    let small = n > m ? m : n;
    let big = n > m ? n : m;
    let i = 1;
    let gcf = 1;
    while (i <= small) {
        if (n % i === 0 && m % i === 0) gcf = i;
        i++;
    }
    let lcm = gcf;
    while (lcm === gcf) {
        if (big % n === 0 && big % m === 0) lcm = big;
        big++;
    }
    answer.push(gcf);
    answer.push(lcm);
    return answer;
}