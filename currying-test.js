const curry = require('./currying.js');

describe('Currying workshop curry exercise test cases', () => {
  const sum = (a, b, c) => a + b + c;
  const currySum = curry(sum);
  test('Currying done correctly when all three arguments passed at once ', () => {
    expect(currySum(1, 2, 3)).toBe(6);
  });
  test('Currying done correctly when two arguments are passed and then third ', () => {
    expect(currySum(1, 2)(3)).toBe(6);
  });
  test('Currying done correctly when all argument one by one', () => {
    expect(currySum(1)(2)(3)).toBe(6);
  });
  test('Currying done correctly when one argument passed then two arguments passed', () => {
    expect(currySum(1)(2, 3)).toBe(6);
  });
});
