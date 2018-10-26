function getNumberLength(n) {
	let i = 1;
	while( ( n /= 10 ) >= 1 ){ i++ }
	return i
}
