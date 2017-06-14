import validators from '.';

function runTests(fn, data) {
  data.forEach(([str, valid]) => expect(fn(str)).toBe(valid));
}

describe('validators', function () {
  describe('email', function () {
    const { email: emailFn } = validators;

    it('should validate input', function () {
      runTests(emailFn, [
        ['foo', false],
        ['foo@bar', false],
        ['foo@bar.', false],
        ['foo@bar.p', false],
        ['foo@bar.pl', true],
        ['foo.bar@baz.pl', true],
        ['test@test.pl', true],
      ]);
    });
  });

  describe('password', function () {
    const { password: passwordFn } = validators;

    it('should validate input', function () {
      runTests(passwordFn, [
        ['abc', false],
        ['a1E', false],
        ['aaaaaa', false],
        ['aaaaa1', false],
        ['aaaa1E', true],
        ['Password1', true],
      ]);
    });
  });
});
