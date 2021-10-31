function calcScore(score, bonus) {
    score = parseInt(score);
    if (bonus == "S") return score;
    else if (bonus == "D") return (score * score);
    else if (bonus == "T") return (score * score * score);
    else return 0;
}
function solution(dartResult) {
    let answer = 0;
    let i = 0;
    let arr = [];
    while (i < dartResult.length) {
        let score = dartResult[i++];
        let bonus = dartResult[i++];
        if (dartResult[i - 1] == "0") {
            score = 10;
            bonus = dartResult[i++];
        }
        let option = 0;
        if (dartResult[i] == "*") {
            option = 1;
            i++;
        } else if (dartResult[i] == "#") {
            option = -1;
            i++;
        }
        let result = calcScore(score, bonus);
        arr.push([result, option])
    }
    let j = 0;
    while (j < arr.length) {
        if (arr[j][1] == 0) answer = answer + arr[j][0];
        else if (arr[j][1] == 1) {
            if (j > 0) {
                if (arr[j - 1][1] == -1) answer = answer - arr[j - 1][0];
                else if (arr[j - 1][1] == 1) answer = answer + arr[j - 1][0] * 2;
                else answer = answer + arr[j - 1][0];
            }
            answer = answer + arr[j][0] * 2;
        } else if (arr[j][1] == -1) answer = answer - arr[j][0];
        j++;
    }
    return answer;
}