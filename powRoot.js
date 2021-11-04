function solution(n) {
    let answer = -1;
    if (Math.pow(n, 0.5) === Math.floor(Math.pow(n, 0.5))) answer = Math.pow(Math.pow(n, 0.5) + 1, 2);
    return answer;
}