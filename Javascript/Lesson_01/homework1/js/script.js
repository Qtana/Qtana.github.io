function pow(x, n) {
	var result = 1;
	
	for (var i = 0; i <= n; i++) {
		result = result * x;
	}

	return result;
}

var x = +prompt ('Введіть число, яке будемо виводити в степінь');
var n = +prompt ('Введіть степінь, в який будемо виводити');

var powResult = pow(x, n);

console.log(powResult);