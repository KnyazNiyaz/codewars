function topThreeWords(text) {
  var arrWords = (text.match(/[a-zA-Z']+/g) || []).filter(word => word.match(/[a-zA-Z]/))
  	var obj = arrWords.map(word => word.toLowerCase()).reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {})
	return Object.keys(obj).sort((a, b) => obj[b] - obj[a]).slice(0,3);
}