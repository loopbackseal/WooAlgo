function solution(n) {
    let answer = 0;
    let nums = [];
    while (n / 10 >= 1) {
        nums.push(n % 10);
        n = Math.floor(n / 10);
    }
    nums.push(n);
    nums.sort(function(a, b) {
        return (b - a);
    })
    for (let x of nums) {
        answer = answer * 10;
        answer = answer + x;
    }
    return answer;
}