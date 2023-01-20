const { sum, multiply, divide } = require('./02-math');

test('Should sum 2 numbers', () => {
  const rta = sum(2, 3);
  expect(rta).toBe(5);
});

test('Should divide 2 numbers', () => {
  const rta = divide(10, 2);
  expect(rta).toBe(5);
  const rta2 = divide(23, 0);
  expect(rta2).toBe(NaN);
});

test('Should multiply 2 numbers', () => {
  const rta = multiply(10, 10);
  expect(rta).toBe(100);
});
