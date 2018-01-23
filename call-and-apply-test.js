const callAndApply = require('./call-and-apply.js');

describe('Currying Workshop call-and-apply exercise test cases', () => {
  test('caller should change the context', () => {
    const person = { name: 'Siri', age: 22, tShirtSize: 'XS' };
    const update = function update(name, age, tShirtSize) {
      this.name = name;
      this.age = age;
      this.tShirtSize = tShirtSize;
    };
    callAndApply.caller(person, update, 'Sita', 42, 'S');
    expect(person).toEqual({ name: 'Sita', age: 42, tShirtSize: 'S' });
  });
  test('applier should change the context', () => {
    const person = { name: 'Siri', age: 22, tShirtSize: 'XS' };
    const update = function update(name, age, tShirtSize) {
      this.name = name;
      this.age = age;
      this.tShirtSize = tShirtSize;
    };
    callAndApply.caller(person, update, 'Sita', 42, 'S');
    expect(person).toEqual({ name: 'Sita', age: 42, tShirtSize: 'S' });
  });
});
