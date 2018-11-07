function getNumberLength(n) {
	let i = 1;
	while( ( n /= 10 ) >= 1 ){ i++ }
	return i
}

function numberLength(n) {
    if (n < 0) return 0
    if (n<10) return 1
    return numberLength(n/10);
}

function numLength(num) {
	return Math.ceil(Math.log10(num))
}