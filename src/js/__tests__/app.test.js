import Validator from '../app';

test('validateUsername normal', () => {
  const nick = new Validator();
  const received = nick.validateUsername('Vova');
  const expected = true;
  expect(received).toBe(expected);
});
