const chain = (fns, val) => {
  const obj = { execute: () => val };
  Object.keys(fns).forEach((k) => obj[k] = (val) ? 
    (...args) => chain(fns, fns[k](val, ...args)) :
    (...args) => chain(fns, fns[k](...args))
  );
  return obj;
}