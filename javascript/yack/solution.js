const yack = (fn, ...args) =>
  args.length >= fn.length ? fn(...args) : (...args2) => yack(fn, ...args, ...args2);