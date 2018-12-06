function isSolved(board) {
   board = board.join('-').replace(/,/g,'');
   if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
   if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
   if(/0/.test(board)) return -1;
   return 0;
}



// ————————————————————————————————

function isSolved(board) {
    
  // lines
  var toTest = Array.from(board);
  
  // colums
  for(var i = 0; i < board.length; ++i)
    toTest.push([board[i][0], board[i][1], board[i][2]]);
    
  // diagonals
  toTest.push([board[0][0], board[1][1], board[2][2]]);
  toTest.push([board[2][0], board[1][1], board[0][2]]);
  
  var finished = true;
  var result = null;
  
  for(let test of toTest) {  
    // We multiplicate each elements, it's return 0 or 1 or 2 or 4 or 8
    result = test.reduce((a, r) => a*r)
    
    if(result === 0)       // There is a 0 in this line
      finished = false;    // the board is not yet finished
    else if(result === 1)
      return 1;            // 1 win because only 1*1*1 make 1
    else if(result === 8)  
      return 2;            // 2 win because only 2*2*2 make 2
  }
  return (finished ? 0 : -1);
}