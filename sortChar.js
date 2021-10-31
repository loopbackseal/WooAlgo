function solution(strings, n) {
    let i = 0;
    while (i < strings.length - 1) {
        let j = i + 1;
        let least = i;
        while (j < strings.length) {
            if (strings[least][n] > strings[j][n]) least = j;
            else if (strings[least][n] == strings[j][n]) {
                least = strings[least] > strings[j] ? j : least;
            }
            j++;
        }
        let tmp = strings[i];
        strings[i] = strings[least];
        strings[least] = tmp;
        i++;
    }
    return strings;
}