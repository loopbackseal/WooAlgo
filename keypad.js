function getDistance(n, left, right, hand, lc, rc) {
	let result = hand;
	let h = n == 0 ? 3 : Math.floor((n - 1) / 3);
	let ld = h - left;
	let rd = h - right;
	
	if (ld < 0) ld = -ld;
	if (rd < 0) rd = -rd;
	rd = rd - rc;
	ld = ld - lc;
	
	if (rd == ld) {
		return result;
	}
	else if (rd < ld) {
		return "right";
	}
	else {
		return "left";
	}
}

function solution(numbers, hand) {
	let answer = '';
	let center = '.';
	let l = 3;
	let r = 3;
	let lc = 0;
	let rc = 0;
	
	for (let n of numbers) {
		if (n == 1 || n == 4 || n == 7) {
			answer += "L";
			l = Math.floor((n - 1) / 3);
			if (lc == 1) lc = 0;
		}
		else if (n == 3 || n == 6 || n == 9) {
			answer += "R";
			r =  Math.floor((n - 1) / 3);
			if (rc == 1) rc = 0;
		}
		else {
			let h = getDistance(n, l, r, hand, lc, rc);
			if (h == "right") {
				answer += "R";
				r =  Math.floor((n - 1) / 3);
				if (n == 0) r = 3;
				rc = 1;
			}
			else {
				answer += "L";
				l = Math.floor((n - 1) / 3);
				if (n == 0) l = 3;
				lc = 1;
			}
		}
	}
	return answer;
}