import { queryString, parse } from './queryString.js';

describe('Object to query string', () => {
  it('should create avalid query string when an object is provided', () => {
    const obj = {
      name: 'Matheus',
      profession: 'Frontenddeveloper',
    };
    queryString(obj);
    expect(queryString(obj)).toBe('name=Matheus&profession=Frontenddeveloper');
  });
  it('should create a valid query stirng even when an array is passed as value', () => {
    const obj = {
      name: 'Matheus',
      abilities: ['js', 'tdd'],
    };
    expect(queryString(obj)).toBe('name=Matheus&abilities=js,tdd');
  });
  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Matheus',
      abilities: {
        first: 'js',
        second: 'tdd',
      },
    };
    expect(() => {
      queryString(obj);
    }).toThrowError;
  });
});
describe('Query stirng to object', () => {
  it('should covert a query string to object', () => {
    const qs = 'name=Matheus&profession=developer';
    expect(parse(qs)).toEqual({
      name: 'Matheus',
      profession: 'developer',
    });
  });
  it('should covert a query string of a single key-value pair to object', () => {
    const qs = 'name=Matheus';
    expect(parse(qs)).toEqual({
      name: 'Matheus',
    });
  });
  it('should convert a query string to an object taking care of comma separated values', () => {
    const qs = 'name=Matheus&abilities=js,tdd';
    expect(parse(qs)).toEqual({
      name: 'Matheus',
      abilities: ['js', 'tdd'],
    });
  });
});
