function solution(s, n) {
    let answer = '';
    let len = s.length;
    let idx = 0;
    while (idx < len) {
        let char = s.charCodeAt(idx);
        if (char >= 97 && char <= 122) {
            if (char + n <= 122)
                answer = answer + String.fromCharCode(char + n);
            else
                answer = answer + String.fromCharCode(char + n - 26);
        } else if (char >= 65 && char <= 90) {
            if (char + n <= 90)
                answer = answer + String.fromCharCode(char + n);
            else
                answer = answer + String.fromCharCode(char + n - 26);
        } else
            answer = answer + s[idx];
        idx++;
    }
    return answer;
}