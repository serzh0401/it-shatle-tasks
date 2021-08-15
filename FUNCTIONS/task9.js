function getDigitsSum(num) {
	return getSum(getDigits(num));
}

function getSum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += Number(elem);
	}
	
	return sum;
}

function getDigits(num) {
	return String(num).split('');
}

console.log(getDigitsSum(333333));
function reduceNum(num) {
	let sum = getDigitsSum(num);
	
	if (sum <= 10) {
		return sum;
	} else {
		return reduceNum(sum);
	}
}

console.log(reduceNum(12345)); // в