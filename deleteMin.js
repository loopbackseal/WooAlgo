function solution(arr) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let x of arr) {
        if (min > x) min = x;
    }
    let idx = arr.indexOf(min);
    arr.splice(idx, 1);
    if (arr.length == 0) arr.push(-1);
    return arr;
}