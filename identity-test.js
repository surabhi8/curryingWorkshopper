const identity = require('./identity');

describe('Currying Workshop', () => {
  test('The typeof argument and typeof return value of function is number', () => {
    const num = 10;
    expect(typeof (identity(num))).toBe('number');
  });
  test('The function takes the argument and returns the same argument', () => {
    expect(identity(10)).toBe(10);
  });
  test('The function takes no argument and returns nothing', () => {
    expect(identity()).toBe();
  });
  test('The function takes undefined argument and returns undefined', () => {
    expect(identity(undefined)).toBe(undefined);
  });

  test('The function takes undefined argument and returns undefined', () => {
    expect(identity(null)).toBe(null);
  });
});
