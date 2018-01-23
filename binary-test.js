const binary = require('./binary.js');

describe('Currying Workshop binary exercise test cases', () => {
  test('The function takes two arguments which are 10 and 20 and return sum as 30', () => {
    expect(binary(10, 20)).toBe(30);
  });
  test('The function takes two number arguments and returns the their sum which is also a number', () => {
    expect(typeof (binary(10, 20))).toBe('number');
  });
  test('The function takes two arguments which are -1 and 0 and return sum as -1', () => {
    expect(binary(-1, 0)).toBe(-1);
  });
  test('The function takes no argument and returns nothing', () => {
    expect(binary()).toBe(null);
  });
  test('The function takes two undefined argument and returns undefined', () => {
    expect(binary(undefined, undefined)).toBe(null);
  });

  test('The function takes two null arguments and return null', () => {
    expect(binary(null, null)).toBe(null);
  });
});
