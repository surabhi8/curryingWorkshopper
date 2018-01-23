const binary = function (firstArg, secArg) {
  if (typeof (firstArg) === 'number' && typeof (secArg) === 'number') {
    return (firstArg + secArg);
  }
  return null;
};

module.exports = binary;
