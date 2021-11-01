function solution(n) {
    let answer = '';
    let wm = ["수","박"];
    let x = 0;
    while (x < n) {
        if (x % 2 == 0) answer = answer + wm[0];
        else answer = answer + wm[1];
        x++;
    }
    return answer;
}