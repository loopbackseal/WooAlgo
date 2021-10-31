function solution(a, b) {
    let answer = 0;
    let big = a > b ? a : b;
    let small = a < b ? a : b;
    while (big > small) {
        answer = answer + small;
        small++;
    }
    answer = answer + big;
    return answer;
}