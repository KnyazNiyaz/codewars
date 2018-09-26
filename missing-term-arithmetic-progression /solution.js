var findMissing = function (list) {
  var step = (list[list.length - 1] - list[0]) / (list.length);
  return list.filter(function(val, index) { return val !== (list[0] + index * step); })[0] - step;
}

"also cool solution by 'kimhyunkang' =)"

var findMissing = function (list) {  
  var expected_sum = (list[0] + list[list.length - 1]) * (list.length + 1) / 2;
  var sum = list.reduce(function(acc, x) { return acc + x; });
  return expected_sum - sum;
}