import operate from './operate'; // You need to import the file you want to test

test('adds 1 + 2 to equal 3', () => {
  expect(operate(1, 2, '+')).toBe('3');
});

test('subtracts 1 - 2 to equal -1', () => {
  expect(operate(1, 2, '-')).toBe('-1');
});

test('multiplies 1 * 2 to equal 2', () => {
  expect(operate(1, 2, 'x')).toBe('2');
});

test('divides 1 / 2 to equal 0.5', () => {
  expect(operate(1, 2, '÷')).toBe('0.5');
});
