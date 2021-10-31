function solution(arr, divisor) {
    let answer = [];
    arr.sort(function(a,b) {
        return (a - b);
    })
    for (let x of arr) {
        if (x % divisor == 0) answer.push(x);
    }
    if (answer.length == 0) answer.push(-1);
    return answer;
}