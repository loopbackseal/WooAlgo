function solution(s){
    let answer = true;
    let str = s.toLowerCase();
    let py = [0,0];
    for (let x of str) {
        if (x == "p") py[0] = py[0] + 1;
        else if(x == "y") py[1] = py[1] + 1;
    }
    if (py[0] != py[1]) answer = false;
    return answer;
}