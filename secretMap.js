function toBin(n, arr) {
    let num = [];
    for (let x of arr) {
        let bin = [];
        while (x >= 2) {
            bin.unshift(x % 2);
            x = Math.floor(x / 2);
        }
        bin.unshift(x);
        while (bin.length < n) bin.unshift(0);
        num.push(bin);
    }
    return num;
}

function solution(n, arr1, arr2) {
    let answer = [];
    let bin1 = toBin(n,arr1);
    let bin2 = toBin(n,arr2);
    for (let j in bin2) {
        let i = 0;
        let pwd = "";
        while (i < n) {
            if(bin1[j][i] == 1 || bin2[j][i] == 1) pwd = pwd + "#";
            else pwd = pwd + " ";
            i++;
        }
        answer.push(pwd);
    }
    return answer;
}