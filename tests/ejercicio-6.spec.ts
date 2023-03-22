import { expect } from 'chai';
import { fromArrayToRanges, fromRangesToArray } from '../src/ejercicio-6';

describe('Ranges functions', () => {
  describe('fromArrayToRanges', () => {
    it('should return the expected ranges for a given array', () => {
      const array = [5, 6, 7, 9, 12, 13, 14];
      const result = fromArrayToRanges(array);
      const expected = ['5_7', '9', '12_14'];
      expect(result).to.deep.equal(expected);
    });

    it('should return the expected ranges for another given array', () => {
      const array = [-3, -2, -1, 3, 5, 6, 7];
      const result = fromArrayToRanges(array);
      const expected = ['-3_-1', '3', '5_7'];
      expect(result).to.deep.equal(expected);
    });

    it('should return a range with a single number for an array of length 1', () => {
      const array = [17];
      const result = fromArrayToRanges(array);
      const expected = ['17'];
      expect(result).to.deep.equal(expected);
    });

    it('should return the expected ranges for yet another given array', () => {
      const array = [3, 5, 6, 7, 9, 10];
      const result = fromArrayToRanges(array);
      const expected = ['3', '5_7', '9_10'];
      expect(result).to.deep.equal(expected);
    });
  });

  describe('fromRangesToArray', () => {
    it('should return the expected array for a given range string', () => {
      const ranges = ['5_7', '9', '12_14'];
      const result = fromRangesToArray(ranges);
      const expected = [5, 6, 7, 9, 12, 13, 14];
      expect(result).to.deep.equal(expected);
    });

    it('should return the expected array for another given range string', () => {
      const ranges = ['-3_-1', '3', '5_7'];
      const result = fromRangesToArray(ranges);
      const expected = [-3, -2, -1, 3, 5, 6, 7];
      expect(result).to.deep.equal(expected);
    });

    it('should return an array of length 1 for a range with a single number', () => {
      const ranges = ['17'];
      const result = fromRangesToArray(ranges);
      const expected = [17];
      expect(result).to.deep.equal(expected);
    });

    it('should return the expected array for yet another given range string', () => {
      const ranges = ['3', '5_7', '9_10'];
      const result = fromRangesToArray(ranges);
      const expected = [3, 5, 6, 7, 9, 10];
      expect(result).to.deep.equal(expected);
    });
  });
});
