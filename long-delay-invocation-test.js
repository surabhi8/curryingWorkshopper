const longDelayInvocation = require('./long-delay-invocation.js');

describe('Currying Workshop long delay invocation exercise test cases', () => {
  test('The function is called two times, one time with argument as 2 and other one with no argument and return 2', () => {
    expect(longDelayInvocation(2)()).toBe(2);
  });
  test('The function is called three times, two times with value 2 and last one with no argument and return total as 4', () => {
    expect(longDelayInvocation(2)(2)()).toBe(4);
  });
  test('The function called only once with no argument and return 0', () => {
    expect(longDelayInvocation()).toBe(0);
  });
  test('The function takes number as argument and returns function', () => {
    expect(typeof (longDelayInvocation(2))).toBe('function');
  });
  test('The function called two times, both times with no argument and returns 0', () => {
    expect(longDelayInvocation()).toBe(2);
  });
});
