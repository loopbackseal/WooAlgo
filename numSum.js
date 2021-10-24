function solution(numbers) {
    let answer = 0;
    let arr = [0,1,2,3,4,5,6,7,8,9];
    for (let n of numbers) {
        let idx = arr.indexOf(n);
        if (idx != -1) arr.splice(idx, 1);
    }
    for (let i of arr) {
        answer = answer + i;
    }
    return answer;
}