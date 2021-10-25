function solution(sizes) {
    let answer = 0;
    let big = [];
    let small = [];
    for (let [x,y] of sizes) {
        if (x > y) {
            big.push(x);
            small.push(y);
        } else {
            big.push(y);
            small.push(x);
        }
    }
    answer = Math.max(...big) * Math.max(...small);
    return answer;
}