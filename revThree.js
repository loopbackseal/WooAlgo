function toThree(n) {
    let arr = [];
    while (Math.floor(n/3) != 0) {
        arr.push(Math.floor(n%3));
        n = Math.floor(n/3);
    }
    arr.push(n);
    return arr;
}
function solution(n) {
    let answer = 0;
    let revThree = toThree(n);
    let len = revThree.length;
    for (let i = 0; i < len; i++) {
        answer = answer + Math.pow(3, len - i - 1) * revThree[i];
    }
    return answer;
}