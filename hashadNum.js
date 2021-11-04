function solution(x) {
    let answer = true;
    let hashad = 0;
    let tmp = x
    while (tmp / 10 >= 1) {
        hashad = hashad + tmp % 10;
        tmp = Math.floor(tmp / 10);
    }
    hashad = hashad + tmp;
    if (x % hashad !== 0) answer = false;
    return answer;
}