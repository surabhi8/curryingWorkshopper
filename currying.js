function currying(fn) {
  const arity = fn.length;
  return function f1(...args2) {
    if (args2.length >= arity) {
      return fn(...args2);
    }
    return function f2(...args1) {
      return f1(...args2.concat(args1));
    };
  };
}
module.exports = currying;
