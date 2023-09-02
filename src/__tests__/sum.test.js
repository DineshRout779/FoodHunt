import { sum } from '../utils/sum';

test('Check sum of two positive numbers', () => {
  expect(sum(2, 5)).toBe(7);
  expect(sum(-10, 10)).toBe(0);
  expect(sum()).toBe('Please provide two arguments');
});
