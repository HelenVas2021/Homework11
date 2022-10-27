//Task 1
//Вариант 1
let sum = 0;
function main(a) {
	return function () {
		return sum += a;
	}
}
console.log(main(3)());
console.log(main(5)());
console.log(main(20)());

//Вариант 2

function main21() {
	let a = 0;
	return function (b) {
		let c = b + a;
		a = c;
		return c;
	}
}
let main1 = main21();
console.log(main1(3));
console.log(main1(5));
console.log(main1(25));