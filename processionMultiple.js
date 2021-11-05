function solution(arr1, arr2) {
    let x = arr1.length;
    let y = arr1[0].length;
    
    let a = arr2.length;
    let b = arr2[0].length;
    
    let answer = Array(x).fill(0).map(x => Array(b).fill(0));
    let i = 0;
    while (i < x) {
        let j = 0;
        while (j < b) {
            let k = 0
            while (k < y) {
                answer[i][j] = answer[i][j] + arr1[i][k] * arr2[k][j];
                k++;
            }
            j++;
        }
        i++;
    }    
    return answer;
}