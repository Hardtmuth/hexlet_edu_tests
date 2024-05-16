import add from '../itinerary.js';

test('test add', () => {
  expect(add(5, 5)).toEqual(10);
  expect(add(100, 11)).toEqual(111);
});
