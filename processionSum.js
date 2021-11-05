function solution(arr1, arr2) {
    let x = arr1.length;
    let y = arr1[0].length;
    let answer = Array(x).fill(0).map(x => Array(y).fill(0));
    let i = 0;
    while (i < x) {
        let j = 0;
        while (j < y) {
            answer[i][j] = arr1[i][j] + arr2[i][j];
            j++;
        }
        i++;
    }
    return answer;
}