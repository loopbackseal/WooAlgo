function solution(s) {
    let answer = "";
    let arr = s.split(" ");
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    for (let x of arr) {
        if (min > parseInt(x)) min = x;
        if (max < parseInt(x)) max = x;
    }
    answer = min + " " + max;
    return answer;
}