snail = function(array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
console.log(result)
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
console.log(result)
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
	console.log(result)
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
}


============================================

snail = function(array) {
  var result = [];

  while (array.length>0){
    //grab the first row
    result = result.concat.apply(result,array.splice(0,1));

    //grab the last column
    for (var i=0;i<=array.length-1;i++)
    {
      result = result.concat(array[i].splice(array.length));
    }

    //grab the last row
    var temp = [].concat.apply([],array.splice(array.length-1)).reverse();
    result = result.concat.apply(result,temp);

    //grab the first column
    for (var i=array.length-1;i>=0;i--)
    {
      result = result.concat(array[i].splice(0,1));
    }
  }
  return result;      
}