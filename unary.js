function unary(arg1) {
  function innerUnary(arg2) {
    if (typeof (arg1) === 'number' && typeof (arg2) === 'number') {
      return arg1 + arg2;
    }
    return null;
  }
  return innerUnary;
}
module.exports = unary;
