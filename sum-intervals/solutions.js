function sumIntervals(intervals){
  return Object.keys(intervals.reduce(function(hash, interval) {
    for(var i = interval[0]; i < interval[1]; i++) hash[i] = 1;
    return hash;
  }, {})).length;
}