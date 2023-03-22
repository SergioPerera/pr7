import { expect } from 'chai';
import { myMap } from '../src/ejercicio-4';

describe('myMap function', () => {
  it('should return a new array with the modified values', () => {
    const arr = [1, 2, 3, 4];
    const expected = [1, 4, 9, 16];
    const result = myMap(arr, (item) => item * item);
    expect(result).to.deep.equal(expected);
  });

  it('should return an empty array when given an empty array', () => {
    const arr: number[] = [];
    const expected: number[] = [];
    const result = myMap(arr, (item) => item * item);
    expect(result).to.deep.equal(expected);
  });

});
