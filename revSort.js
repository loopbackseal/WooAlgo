function solution(s) {
    let answer = [];
    for (let x of s) answer.push(x);
    answer.sort();
    answer.reverse();
    let ans = "";
    for (let x of answer) ans = ans + x;
    return ans;
}