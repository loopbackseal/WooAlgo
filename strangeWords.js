function solution(s) {
    let answer = '';
    let words = s.toLowerCase().split(" ");
    let idx = 0;
    while (idx < words.length) {
        let word = words[idx];
        let i = 0;
        while (i < word.length) {
            if (i % 2 == 0) answer = answer + word[i].toUpperCase();
            else answer = answer + word[i];
            i++;
        }
        if (idx != words.length - 1)
            answer = answer + " ";
        idx++;
    }
    return answer;
}