import { expect } from 'chai';
import { Complex, add, mult, div, prod, conj, abs } from '../src/ejercicio-2';

describe('complex numbers operations', () => {
  const a: Complex = [1, 2];
  const b: Complex = [3, 4];

  it('add(a, b) should return [4, 6]', () => {
    expect(add(a, b)).to.be.eql([4, 6]);
  });

  it('mult(a, b) should return [-5, 10]', () => {
    expect(mult(a, b)).to.be.eql([-5, 10]);
  });

  it('div(a, b) should return [0.44, 0.08]', () => {
    expect(div(a, b)).to.be.eql([0.44, 0.08]);
  });

  it('prod(a, 2) should return [2, 4]', () => {
    expect(prod(a, 2)).to.be.eql([2, 4]);
  });

  it('conj(a) should return [1, -2]', () => {
    expect(conj(a)).to.be.eql([1, -2]);
  });

  it('abs(a) should return 2.236', () => {
    expect(abs(a)).to.be.closeTo(2.236, 0.001);
  });
});
