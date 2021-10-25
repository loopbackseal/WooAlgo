function solution(a, b) {
    let answer = '';
    const month = [31,29,31,30,31,30,31,31,30,31,30,31];
    const day = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
    let i = 0;
    let days = b;
    while (i < a - 1) {
        days = days + month[i];
        i++;
    }
    answer = day[days % 7];
    return answer;
}