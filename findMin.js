function solution(A,B) {
    let answer = 0;
    A.sort(function(a, b) {
        return (a - b);
    });
    B.sort(function(a, b) {
        return (b - a);
    });
    let i = 0;
    while (i < A.length) {
        answer = answer + A[i] * B[i];
        i++;
    }
    return answer;
}