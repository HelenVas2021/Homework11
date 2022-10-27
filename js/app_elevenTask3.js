//Task 3
function twoDemensionalArray() {
	let mainArray = [];
	let mainLengthArray = +prompt('Enter the length of main array');
	for (let i = 0; i < mainLengthArray; i++) {
		mainArray.push([]);

		let internalLengthArray = parseInt(prompt('Enter the internal length'));
		for (let j = 0; j < internalLengthArray; j++) {
			let numbers = +prompt('Enter the numbers of each elements');
			mainArray[i].push([numbers]);
		}
	}
	console.log(mainArray);
}
let jeneral = twoDemensionalArray();

