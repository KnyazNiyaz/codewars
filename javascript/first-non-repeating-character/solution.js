function firstNonRepeatingLetter(s) {
  var res = s.split('').find(a => s.split('').filter(value => value.toLowerCase() === 	a.toLowerCase()).length === 1 ? a : '')
  return  res ?  res : ''
}