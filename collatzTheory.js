function solution(num) {
    let answer = 0;
    let count = 0;
    while (count <= 500 && num !== 1) {
        if (num % 2 === 0) num = num / 2;
        else num = num * 3 + 1;
        count++;
    }
    answer = count <= 500 ? count : -1;
    return answer;
}