//Task 4
function getStringOfUser(userSrting, deleteSymbol) {
	for (let i = 0; i < deleteSymbol.length; i++) {
		userSrting = checkIndex(userSrting, deleteSymbol[i]);
	}
	return userSrting;
}
console.log(getStringOfUser('Hello world', ['l', 'o']));

function checkIndex(stringFromUSer, symbolFromUSer) {
	let i;
	while (true) {
		i = stringFromUSer.indexOf(symbolFromUSer);
		if (i < 0) {
			break;
		}
		stringFromUSer = stringFromUSer.replace(stringFromUSer[i], "");
	}
	// console.log(symbolFromUSer);
	return stringFromUSer;
}