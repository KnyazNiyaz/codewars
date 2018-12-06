findUniq = (q) => {
  const obj = q.reduce((a, b) => Object.assign(a, {[b]: (a[b] || 0) + 1}), {})
	return +Object.keys(obj).filter((a) => obj[a] == 1)[0]
}

function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}

function findUniq(arr) {
  return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
}
