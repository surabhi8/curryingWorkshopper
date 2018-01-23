let total = 0;
function longDelay(arg1) {
  if (arg1 === undefined) {
    const result = total;
    total = 0;
    return result;
  }
  total += arg1;
  return longDelay;
}

module.exports = longDelay;
