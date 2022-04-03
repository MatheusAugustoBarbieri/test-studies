import { sum, sumTwo } from './calculator.js';

it('should sum 2 and 2 and the result must be 4', () => {
  expect(sum(2, 2)).toBe(4);
  expect(sumTwo(2, 3)).toBe(6);
});

it('should sum 2 and 2 even if one of them is a string and the result must be', () => {
  expect(sum('2', 2)).toBe(4);
});

it('should thow an error if what is provided to the methods cannot be summed', () => {
  //passou função pois é preciso executar isso para ver se retorna erro
  expect(() => {
    sum('', '2');
  }).toThrowError();

  expect(() => {
    sum([2, 2]);
  }).toThrowError();

  expect(() => {
    sum({});
  }).toThrowError();

  expect(() => {
    sum();
  }).toThrowError();
});
