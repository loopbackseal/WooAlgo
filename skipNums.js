function solution(arr)
{
    let answer = [];
    let i = 0;
    while (i < arr.length) {
        while (arr[i] == arr[i + 1]) i++;
        answer.push(arr[i]);
        i++;
    }
    return answer;
}