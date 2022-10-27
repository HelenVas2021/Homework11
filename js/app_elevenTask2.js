
//Task 2
//Вариант 1
let oneNumber = parseInt(prompt('Please, enter the first number'));
let twoNumber = parseInt(prompt('Please, enter the second number'));
let znak = prompt('Please, enter the znak for numbers');

function calculate(znak) {

	if (znak === "*") {
		return function sum(a, b) {
			return a * b
		};
	}
	if (znak === "/") {
		return function (a, b) {
			return a / b;
		};
	}
	if (znak === "+") {
		return function (a, b) {
			return a + b;
		};
	}
	if (znak === "-") {
		return function (a, b) {
			return a - b;
		};
	}
	if (znak === "%") {
		return function (a, b) {
			return a % b;
		};
	}
	if (znak === "**") {
		return function (a, b) {
			return a ** b;
		};
	}
}
console.log(calculate(znak)(oneNumber, twoNumber));

//Вариант 2
/*
function main(znak, numberOne, numberTwo) {
	switch (znak) {
		case "+": console.log(sum(numberOne, numberTwo));
			break;
		case '*': console.log(calc(numberOne, numberTwo));
			break;
		case '/': console.log(devide(numberOne, numberTwo));
			break;
		case '-': console.log(minus(numberOne, numberTwo));
			break;
		case '%': console.log(remainOfNumber(numberOne, numberTwo));
			break;
		case '**': console.log(exponentiation(numberOne, numberTwo));
			break;
		default: 'Введите символ';
			break;
	}

}

function sum(numberOne, numberTwo) {
	return numberOne + numberTwo;
}
function calc(numberOne, numberTwo) {
	return numberOne * numberTwo;
}
function devide(numberOne, numberTwo) {
	return numberOne / numberTwo;
}
function minus(numberOne, numberTwo) {
	return numberOne - numberTwo;
}
function remainOfNumber(numberOne, numberTwo) {
	return numberOne % numberTwo;
}
function exponentiation(numberOne, numberTwo) {
	return numberOne ** numberTwo;
}
main(znak, oneNumber, twoNumber);
*/