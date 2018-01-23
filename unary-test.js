const unary = require('./unary.js');

let result;
describe('Currying Workshop unary exercise test cases', () => {
  test('Outer function takes input as 10 and returns another unary function which takes 20 as input and return 30', () => {
    result = unary(10);
    expect(result(20)).toBe(30);
  });
  test('Outer and inner functions takes input as number and return number as input', () => {
    result = unary(10);
    expect(typeof (result(20))).toBe('number');
  });
  test('Outer function takes 0 as input and returns another unary function which takes -1 as input and returns -1', () => {
    result = unary(0);
    expect(result(-1)).toBe(-1);
  });
  test('Outer and Inner  functions takes no argument and returns null', () => {
    result = unary();
    expect(result()).toBe(null);
  });
  test('Outer and Inner  functions takes undefined as argument and returns null', () => {
    result = unary(undefined);
    expect(result(undefined)).toBe(null);
  });

  test('Outer and Inner  functions takes null as argument and returns null', () => {
    expect(result(null, null)).toBe(null);
  });
});
