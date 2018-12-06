function removeZeros(array) {
  const head = []
  const tail = []
  for (const e of array) {
    if (e === 0 || e === "0") {
      tail[tail.length] = e
    } else {
      head[head.length] = e
    }
  }
  return [...head, ...tail]
}


Hahahaha....

removeZeros = arr => arr['fi' + 'lter'](e => e !== 0 && e !== '0')['conc' + 'at'](arr['filt' + 'er'](e => e === 0 || e === '0'));

LoooooooL

Array.prototype.addEnd = Array.prototype.push;
Array.prototype.addBegin = Array.prototype.unshift;

function removeZeros(array) {
  let res = [];
  for (let i = array.length; i--;) {
    if (array[i] !== 0 && array[i] !== '0') {
      res.addBegin(array[i])
    }
  }
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0 || array[i] === '0') {
      res.addEnd(array[i])
    }
  }
  return res;
}